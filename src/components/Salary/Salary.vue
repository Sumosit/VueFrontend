<template>
    <div>
        <div class="salary">
            <transition-group name="card">
                <div style="margin-bottom: 5px"
                        :key="salary.id" v-for="(salary, index) in sortedSalaries">
                    <div style="background: #444444;
                color: #e8e8e8; padding: 8px;
                font-size: 16px;
                font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;">
                        <div>Месяц начисления: <span style="font-size: 16px; font-weight: lighter">{{salary.month}}</span></div>
                        <div>Расчётный список за <span style="font-size: 16px; font-weight: lighter">{{salary.period.replace("T", " ").slice(0, 19)}}</span></div>
                        <div>Работник: <span style="font-size: 16px; font-weight: lighter">{{salary.user.username}}</span></div>
                        <div>Начислено дохода: <span style="font-size: 16px; font-weight: lighter">{{salary.salary}} тенге</span></div>
                    </div>
                    <table class="salary-table">
                        <thead>
                        <tr class="salary-head">
                            <th>Вид</th>
                            <th>Период</th>
                            <th>Дни</th>
                            <th>Часы</th>
                            <th>Суммы</th>
                        </tr>
                        </thead>
                        <tbody class="salary-body">
                        <tr>
                            <td><strong>Начислены</strong></td>
                        </tr>
                        <tr>
                            <td>Оклад по дням</td>
                            <td>{{salary.month}}</td>
                            <td>{{salary.days}}</td>
                            <td>{{salary.hours}}</td>
                            <td>{{salary.salary}}</td>
                        </tr>
                        <tr>
                            <td>Всего начислено</td>
                            <td></td>
                            <td>{{salary.days}}</td>
                            <td>{{salary.hours}}</td>
                            <td>{{salary.salary}}</td>
                        </tr>
                        <tr>
                            <td><strong>Удержаны</strong></td>
                        </tr>
                        <tr>
                            <td>ИПН начисленный</td>
                            <td>{{salary.month}}</td>
                            <td></td>
                            <td></td>
                            <td>{{salary.ipn}}</td>
                        </tr>
                        <tr>
                            <td>ОПВ исчисленное</td>
                            <td>{{salary.month}}</td>
                            <td></td>
                            <td></td>
                            <td>{{salary.opv}}</td>
                        </tr>
                        <tr>
                            <td>Взносы ОСМС исчисленные</td>
                            <td>{{salary.month}}</td>
                            <td></td>
                            <td></td>
                            <td>{{salary.vosms}}</td>
                        </tr>
                        <tr>
                            <td><strong>Налоговые вычеты</strong></td>
                        </tr>
                        <tr>
                            <td>Всего удержано</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{{salary.withheld}}</td>
                        </tr>
                        <tr>
                            <td>Вычет ОПВ</td>
                            <td>{{salary.month}}</td>
                            <td></td>
                            <td></td>
                            <td>{{salary.opv}}</td>
                        </tr>
                        <tr>
                            <td>Стандартный МЗП</td>
                            <td>{{salary.month}}</td>
                            <td></td>
                            <td></td>
                            <td>{{salary.withheld}}</td>
                        </tr>
                        <tr>
                            <td>Вычет ВОСМС</td>
                            <td>{{salary.month}}</td>
                            <td></td>
                            <td></td>
                            <td>{{salary.vosms}}</td>
                        </tr>
                        <tr>
                            <td>Всего вычеты</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{{salary.total_nalog}}</td>
                        </tr>
                        <tr>
                            <td>Долг за организацией на начало месяцы</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{{salary.debt}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Salary",
        created() {
            document.title = "Salary";
        },
        async mounted() {
            await this.$store.dispatch("fetchSalaries", this.$store.state.auth.user.id);
        },
        computed: {
            sortedSalaries: function () {
                function compare(a, b) {
                    if (a.id > b.id)
                        return -1;
                    if (a.id < b.id)
                        return 1;
                    return 0;
                }

                return this.$store.getters.getSalaries.sort(compare);
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/salary.css';
</style>
