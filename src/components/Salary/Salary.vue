<template>
  <div class="salary">
    <div>Месяц начисления: Апрель 2021</div>
    <div>Расчётный список за Апрель 2021</div>
    <div>Работник: Yerlan</div>
    <div>С начала года: начислено дохода: 233,000.00</div>
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
      <tbody>
      <tr>
        <td>Начислены</td>
      </tr>
      <tr>
        <td>Оклад по дням</td>
        <td>Апрель 21</td>
        <td>18</td>
        <td>144</td>
        <td>233,000.00</td>
      </tr>
      <tr>
        <td>Всего начислено</td>
        <td></td>
        <td>18</td>
        <td>144</td>
        <td>233,000.00</td>
      </tr>
      <tr>
        <td>Удержаны</td>
      </tr>
      <tr>
        <td>ИПН начисленный</td>
        <td>Апрель 21</td>
        <td></td>
        <td></td>
        <td>16,254.00</td>
      </tr>
      <tr>
        <td>ИПН начисленный</td>
        <td>Апрель 21</td>
        <td></td>
        <td></td>
        <td>23,300.00</td>
      </tr>
      <tr>
        <td>Взносы ОСМС исчисленные</td>
        <td>Апрель 21</td>
        <td></td>
        <td></td>
        <td>4,660.00</td>
      </tr>
      <tr>
        <td>Всего удержано</td>
        <td></td>
        <td></td>
        <td></td>
        <td>44,214</td>
      </tr>
      <tr>
        <td>Всего удержано</td>
        <td></td>
        <td></td>
        <td></td>
        <td>44,214</td>
      </tr>
      <tr>
        <td>Налоговые вычеты</td>
      </tr>
      <tr>
        <td>Всего удержано</td>
        <td></td>
        <td></td>
        <td></td>
        <td>44,214</td>
      </tr>
      <tr>
        <td>Вычет ОПВ</td>
        <td>Апрель 21</td>
        <td></td>
        <td></td>
        <td>23,300.00</td>
      </tr>
      <tr>
        <td>Стандартный МЗП</td>
        <td>Апрель 21</td>
        <td></td>
        <td></td>
        <td>42,500.00</td>
      </tr>
      <tr>
        <td>Вычет ВОСМС</td>
        <td>Апрель 21</td>
        <td></td>
        <td></td>
        <td>4,660.00</td>
      </tr>
      <tr>
        <td>Всего вычеты</td>
        <td></td>
        <td></td>
        <td></td>
        <td>70,460.00</td>
      </tr>
      <tr>
        <td>Долг за организацией на начало месяцы</td>
        <td></td>
        <td></td>
        <td></td>
        <td>188,786.00</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Salary",
    created() {
      document.title = "Salary";
    }
  }
</script>

<style scoped>
  @import '../../assets/css/salary.css';
</style>
