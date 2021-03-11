<template>
  <div id="app" class="bg-gray-100 dark:bg-gray-900 dark:text-white">
    <Header />
    <main class="px-7 pb-7">
      <h1 class="my-6 ml-4.5 text-gray-600 leading-5">
        Home / <span class="underline">Reports & Insights</span>
      </h1>
      <section v-if="loaded" class="main-section grid gap-x-8">
        <Chart :reports="reports" />
        <Employees :users="users" />
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Chart from '@/components/Chart';
import Employees from '@/components/Employees.vue';

export default {
  name: 'App',
  components: { Header, Chart, Employees },
  mounted() {
    const users = fetch('/api/users').then(res => res.json());
    const reports = fetch('/api/reports').then(res => res.json());

    Promise.all([users, reports]).then(responses => {
      this.users = responses[0].users;
      this.reports = responses[1].reports;
      this.loaded = true;
    });
  },
  data() {
    return {
      users: null,
      reports: null,
      loaded: false,
    };
  },
};
</script>

<style lang="postcss">
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  src: url('./assets/fonts/Inter-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  font-weight: 500;
  src: url('./assets/fonts/Inter-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  font-weight: 600;
  src: url('./assets/fonts/Inter-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  font-weight: 700;
  src: url('./assets/fonts/Inter-Bold.ttf') format('truetype');
}

@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
  min-width: 1280px;
}

.main-section {
  grid-template-columns: 425px 1fr;
  min-height: 440px;
}
</style>
