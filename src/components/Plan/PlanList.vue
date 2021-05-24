<template>
    <div style="border-left: 1px solid black;padding: 5px">
<!--        <hr>-->
        {{plan.name}}
        <div class="inline-flex margin-left5px">
            <div class="add-button content-center" v-if="!closed && plan.plans.length > 0" v-on:click="closed = !closed">
                ↓
            </div>
            <div class="add-button content-center" v-if="closed" v-on:click="closed = !closed">
                ↑
            </div>
            <div @click="changePlanStatus()"
                 :class="{
                'add-button': plan.completed === 0,
                'add-button-filled': plan.completed === 100
                }"
                 class="inline-flex add-button content-center margin-left1px"
                 v-if="plan.plans.length === 0">
                ✓
            </div>
        </div>
        <div class="inline-flex plan-completed margin-left5px">{{plan.completed}}%</div>
        <div @click="changeAddPlanField()" class="add-button content-center margin-left1px"
             v-if="editMode">+
        </div>
        <ol class="ul-style-none" v-show="closed">
            <li v-for="(planq, index) in sortedPlans">
                <PlanList
                        :editMode="editMode"
                          :key="tick"
                          :planId="planq.id"
                          v-on:CellToLife="onChangeStatusClick"/>
            </li>
            <li v-if="addPlanField">
                <form @submit.prevent="addPlan()">
                    <input v-model="newPlanName">
                    <input style="margin-left: 5px" type="submit">
                </form>
            </li>
        </ol>
    </div>
</template>

<script>
    import backendUrl from "../../store/backendUrl";
    import axios from "axios";
    import authHeader from "../../services/auth-header";
    import PlanList from "../Plan/PlanList";

    export default {
        name: "PlanList",
        components: {
            PlanList
        },
        props: ['planId', 'editMode', 'margin', 'rootPlan'],
        data() {
            return {
                plan: Object,
                addPlanField: false,
                newPlanName: '',
                closed: false,
                tick: 0
            }
        },
        async mounted() {
            await this.getPlan();
            this.$store.commit('updatePlanIds', this.plan.id);
        },
        methods: {
            async onChangeStatusClick(value) {
                await this.getPlan();
                this.$emit('CellToLife', 1);
            },
            emitToUpdate: function () {
                this.$emit('CellToLife', 1);
            },
            changeAddPlanField() {
                if (!this.closed) {
                    this.closed = true;
                }
                this.addPlanField = !this.addPlanField
            },
            changePlanStatus() {
                let fd = new FormData();
                fd.append("planId", this.plan.id);
                if (this.plan.completed > 0) {
                    fd.append("completed", 0);
                } else if (this.plan.completed === 0) {
                    fd.append("completed", 100);
                }
                fd.append("rootPlan", this.sortedPlanIds);
                axios.post(backendUrl() + "api/admin/plans/change/completed", fd, {
                    headers: authHeader()
                }).then(async res => {
                    await this.getPlan();
                    this.emitToUpdate();
                }).catch(err => {
                    console.log(err.response);
                });
            },
            addPlan() {
                let fd = new FormData();
                fd.append("planId", this.plan.id);
                fd.append("newPlanName", this.newPlanName);
                axios.post(backendUrl() + "api/admin/plans/add/plan", fd, {
                    headers: authHeader()
                }).then(async res => {
                    await this.getPlan();
                    this.emitToUpdate();
                    this.tick++;
                }).catch(err => {
                    console.log(err.response);
                });
            },
            async getPlan() {
                this.plan = (await axios.get(backendUrl() + 'api/user/plans/one/' + this.planId,
                    {
                        headers: authHeader()
                    })).data;
                console.log(this.plan)
            },
        },
        computed: {
            sortedPlans: function () {
                function compare(a, b) {
                    if (a.id > b.id)
                        return -1;
                    if (a.id < b.id)
                        return 1;
                    return 0;
                }

                return this.plan.plans.sort(compare);
            },
            sortedPlanIds: function () {
                function compare(a, b) {
                    if (a > b)
                        return -1;
                    if (a < b)
                        return 1;
                    return 0;
                }

                return this.$store.getters.getPlanIds.sort(compare);
            }
        }
    }
</script>

<style scoped>
    td {
        border: 1px solid black;
        padding: 5px;
    }
</style>
