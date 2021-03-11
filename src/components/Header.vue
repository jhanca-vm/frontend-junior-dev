<template>
  <header
    class="h-16 mx-7 mt-7 pl-10 pr-6 bg-blue-700 flex items-center justify-between
      rounded-md"
  >
    <nav class="header--nav flex items-center text-white">
      <span class="uppercase font-bold text-2xl mr-20 cursor-pointer">
        Logo
      </span>
      <ul class="flex">
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>
    </nav>
    <ProfileMenu />
  </header>
</template>

<script>
import ProfileMenu from './ProfileMenu.vue';

export default {
  name: 'Header',
  components: {
    ProfileMenu,
  },
};
</script>

<style lang="postcss">
.header--nav ul li {
  @apply mr-14 ml-3 font-medium cursor-pointer;
}
</style>
