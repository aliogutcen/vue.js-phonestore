<template>
  <div class="h-screen bg-gray-100">
    <nav
      class="bg-gray-900 flex justify-between items-center font-semibold h-[8%] shadow-md p-4 text-white"
    >
      <div class="flex space-x-6">
        <router-link to="/" class="relative group">
          Phone Add
          <span
            class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"
          ></span>
        </router-link>
        <router-link to="/list-phone" class="relative group">
          Phone List
          <span
            class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"
          ></span>
        </router-link>
        <router-link to="/json-list" class="relative group">
          Json-List
          <span
            class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"
          ></span>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
router-link.active {
  color: blue-500;
}
</style>
