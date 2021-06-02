<template>
    <div>
        <div class="admin-tasks">
            <div class="name-surname">
                <div>
                    <label for="salary">Salary</label>
                    <input id="salary"
                           type="number"
                           v-model="salary"/>
                </div>
                <div>
                    <label for="debt">Debt</label>
                    <input id="debt"
                           type="number"
                           v-model="debt"/>
                </div>
                <div>
                    <label for="hours">Hours</label>
                    <input id="hours"
                           type="number"
                           v-model="hours"/>
                </div>
                <div>
                    <label for="days">Days</label>
                    <input id="days"
                           type="number"
                           v-model="days"/>
                </div>
                <div>
                    <label for="month">Month</label>
                    <input id="month"
                           type="number"
                           v-model="month"/>
                </div>
            </div>
            <div class="a-t-users-count">
                <span class="">Selected users count: {{selected.length + selectedGroups.length}}</span>
                <button @click="sendSalaries()">Send salary</button>
            </div>
            <div style="margin-top: 5px">Opv: {{opv}}</div>
            <div style="margin-top: 5px">Vosms: {{vosms}}</div>
            <div style="margin-top: 5px">Total taxes: {{total_nalog}}</div>
            <div style="margin-top: 5px">IPN: {{ipn}}</div>
            <div style="margin-top: 5px">Witheld: {{withheld}}</div>
        </div>
        <AdminSelectedField :open="open"
                            v-on:childToParent="onChildClick"
                            v-on:groupsToParent="onChildSelectedGroupsClick"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";
    import AdminSelectedField from "../Task/AdminSelectedField";
    import getTimestampDate from "../../js/getTimestampDate";
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import getMonths from "../../js/getMonths";
    import getMonth from "../../js/getMonth";

    export default {
        name: "AdminSalary",
        components: {
            AdminSelectedField
        },
        data() {
            return {
                selectedGroups: [],
                selected: [],
                search: '',
                open: true,
                salary: 233000,
                opv: 0,
                oneMzp: 42500,
                vosms: 0,
                total_nalog: 0,
                ipn: 0,
                withheld: 0,
                debt: 0,
                days: 18,
                hours: 144,
                month: new Date().getDate() + " " + getMonth(5).name
            }
        },
        created() {
            document.title = "Admin salary";
        },
        async mounted() {
            await this.$store.dispatch("fetchUsers");
            await this.$store.dispatch("fetchGroups");
            this.calculate();
        },
        watch: {
            salary: function () {
                this.opv = (this.salary * 10) / 100;
                this.vosms = (this.salary * 2) / 100;
                this.total_nalog = this.opv + this.vosms + this.oneMzp;
                this.ipn = ((this.salary - this.total_nalog) * 10) / 100;
                this.withheld = this.opv + this.vosms + this.ipn;
                this.month = new Date().getDate() + " " + getMonth(5).name;
            }
        },
        computed: {
            calculate() {
                this.opv = (this.salary * 10) / 100;
                this.vosms = (this.salary * 2) / 100;
                this.total_nalog = this.opv + this.vosms + this.oneMzp;
                this.ipn = ((this.salary - this.total_nalog) * 10) / 100;
                this.withheld = this.opv + this.vosms + this.ipn;
                this.month = new Date().getDate() + " " + getMonth(5).name;
            }
        },
        methods: {
            onChildClick(value) {
                this.selected = value
            },
            onChildSelectedGroupsClick(value) {
                this.selectedGroups = value
            },
            arrayUnique(arr) {
                return arr.filter((e, i, a) => a.indexOf(e) === i)
            },
            sendSalaries() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                // this.stompClient.debug = () => {
                // };
                let fd = new FormData();
                let usersId = [];
                for (var i = 0; i < this.selected.length; i++) {
                    usersId.push(this.selected[i].id);
                }
                for (var i = 0; i < this.selectedGroups.length; i++) {
                    usersId.push(this.selectedGroups[i]);
                }
                usersId = this.arrayUnique(usersId);
                fd.append("period", getTimestampDate());
                fd.append("days", this.days);
                fd.append("hours", this.hours);
                fd.append("month", this.month);
                fd.append("salary", this.salary);
                fd.append("opv", this.opv);
                fd.append("oneMzp", this.oneMzp);
                fd.append("vosms", this.vosms);
                fd.append("totalNalog", this.total_nalog);
                fd.append("ipn", this.ipn);
                fd.append("withheld", this.withheld);
                fd.append("debt", this.debt);
                fd.append("userId", this.$store.state.auth.user.id);
                fd.append("usersId", usersId);
                // console.log(this.selected);
                // console.log(fd);
                // console.log(usersId);
                axios.post(backendUrl() + 'api/admin/salary/save', fd, {
                    headers: authHeader()
                }).then(res => {
                    for (let i = 0; i < usersId.length; i++) {
                        let msg_notification = {
                            id: null,
                            type: "New salary from ",
                            message: "more info",
                            linkToChat: "/user/salary",
                            fromUserId: this.$store.state.auth.user.id,
                            userId: usersId[i]
                        };
                        // console.log(msg_notification);
                        this.stompClient.send("/app/notification/" + usersId[i], JSON.stringify(msg_notification), {});
                    }
                    // console.log(res);
                }).catch(err => {
                    console.log(err.response);
                });
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-tasks.css';
</style>
