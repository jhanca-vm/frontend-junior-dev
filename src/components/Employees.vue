<template>
  <section
    class="employees bg-white rounded-lg shadow-lg px-4 py-4.5 dark:bg-gray-800"
  >
    <h2 class="text-gray-700 text-lg tracking-wide mb-4 dark:text-gray-100">
      Employees
    </h2>
    <table
      class="w-full text-xs text-left border border-separate rounded-lg pt-3"
    >
      <thead>
        <tr>
          <th>Employee</th>
          <th>Last login</th>
          <th>Department</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td class="flex items-center">
            <img
              class="w-5 h-5 rounded-full mr-2"
              :src="require(`../assets/images/photo-${employee.id}.jpg`)"
              :alt="`${employee.first_name} ${employee.last_name}`"
            />
            <span>
              <p>{{ `${employee.first_name} ${employee.last_name}` }}</p>
              <p class="text-black text-opacity-50 dark:text-white">
                {{ employee.email }}
              </p>
            </span>
          </td>
          <td>
            <p>{{ moment(employee.lastLogin).format('MMMM DD, YYYY') }}</p>
            <p class="text-black text-opacity-50 dark:text-white">
              {{ moment(employee.lastLogin).fromNow() }}
            </p>
          </td>
          <td>{{ employee.department }}</td>
          <td
            class="font-semibold"
            :class="employee.status ? 'text-green-500' : 'text-red-500'"
          >
            {{ employee.status ? 'Active' : 'Inactive' }}
          </td>
          <td>
            <span
              class="down-arrow inline-block bg-no-repeat bg-cover cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Employees',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const users = this.users.map(user => {
      const orderedDates = user.sessions.sort(
        (a, b) => new Date(b) - new Date(a)
      );

      return { ...user, lastLogin: orderedDates[0] };
    });

    this.employees = users.slice(0, 5);
  },
  data() {
    return {
      employees: null,
    };
  },
  methods: {
    moment,
  },
};
</script>

<style lang="postcss">
.employees table {
  border-spacing: 0;
}

.employees th {
  @apply px-4 py-3.5 font-semibold text-black text-opacity-50 dark:text-white;
}

.employees td {
  @apply border-t px-4 py-3;
}

.employees table,
.employees td {
  @apply border-black border-opacity-10 dark:border-white;
}

.employees .down-arrow {
  background-image: url('../assets/icons/down-arrow.svg');
  height: 7px;
  width: 11px;
}
</style>
