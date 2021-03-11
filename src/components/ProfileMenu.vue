<template>
  <div class="header--profile-menu relative">
    <img
      class="w-10 h-10 rounded-full border border-white cursor-pointer"
      src="../assets/images/profile-photo.jpg"
      alt="Profile Photo"
      @click="toggle"
    />
    <div
      class="absolute right-0 w-52 bg-white mt-1.5 rounded shadow-lg border
      border-gray-300 dark:bg-gray-800 dark:border-gray-700"
      :class="display"
    >
      <div
        class="grid gap-x-4 px-3.5 pt-3 pb-1.5 border-b border-gray-300 
        cursor-pointer dark:border-gray-700"
        @click="toggle"
      >
        <span class="icon-profile h-4 w-4 row-span-2" />
        <p class="text-sm text-gray-700 leading-4 mb-1 dark:text-gray-100">
          My Profile
        </p>
        <p class="text-xs text-gray-500">Change settings of your account.</p>
      </div>
      <button
        class="mx-3.5 my-2.5 flex items-center cursor-pointer focus:outline-none"
        @click="toggle"
      >
        <span class="icon-logout w-4 h-3.5" />
        <span class="text-red-600 text-sm leading-4 ml-4 dark:text-red-500">
          Logout
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data() {
    return {
      hide: true,
    };
  },
  computed: {
    display() {
      return this.hide ? 'hidden' : 'block';
    },
  },
  methods: {
    toggle() {
      this.hide = !this.hide;
    },
  },
};
</script>

<style lang="postcss">
.header--profile-menu > div div {
  grid-template-columns: max-content 1fr;
}

.header--profile-menu .icon-profile {
  background-image: url('../assets/icons/profile.svg');
}

.header--profile-menu .icon-logout {
  background-image: url('../assets/icons/logout.svg');
}

.icon-profile,
.icon-logout {
  @apply bg-no-repeat bg-cover mr-0.5;
}
</style>
