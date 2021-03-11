<template>
  <div class="bg-white rounded-lg p-4.5 shadow-lg dark:bg-gray-800">
    <h2 class="text-gray-700 text-lg tracking-wide dark:text-gray-100">
      Why do you create a startup?
    </h2>
    <span class="text-gray-500 tracking-wide leading-6">Trends</span>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  name: 'Chart',
  props: {
    reports: {
      type: Array,
      required: true,
    },
  },
  components: { GChart },
  mounted() {
    const reports = this.reports.map(({ category, total }) => [
      category,
      total,
    ]);

    reports.unshift(['Category', 'Total']);

    this.chartData = reports;

    this.chartOptions = {
      height: 352,
      backgroundColor: 'transparent',
      chartArea: {
        top: 0,
        width: 280,
        bottom: 18,
      },
      legend: {
        position: 'bottom',
        textStyle: {
          color: '#6e8098',
          fontSize: 11.5,
        },
      },
      colors: ['#E289F2', '#896CF8', '#503F96', '#B283FB'],
      pieSliceText: 'none',
      pieSliceBorderColor: 'none',
      fontName: 'Inter',
    };
  },
  data() {
    return {
      chartData: null,
      chartOptions: null,
    };
  },
};
</script>
