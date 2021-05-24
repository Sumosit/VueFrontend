<template>
    <div>
        {{plan.name}}
        <div v-for="(planq, index) in sortedPlans">
            <PlanListInfo :editMode="editMode"
                      :planId="planq.id"/>
        </div>
    </div>
</template>

<script>
    import backendUrl from "../../store/backendUrl";
    import axios from "axios";
    import authHeader from "../../services/auth-header";
    import PlanListInfo from "../Plan/PlanListInfo";

    export default {
        name: "PlanListInfo",
        components: {
            PlanListInfo
        },
        props: ['editMode', 'planId'],
        data() {
            return {
                plan: Object
            }
        },
        async mounted() {
            await this.getPlan();
        },
        methods: {
            async getPlan() {
                this.plan = (await axios.get(backendUrl() + 'api/user/plans/one/' + this.planId,
                    {
                        headers: authHeader()
                    })).data;
                console.log(this.plan)
            }
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
            }
        }

    }
</script>

<style scoped>

</style>
