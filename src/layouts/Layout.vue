<template>
  <div class="flex h-screen container mx-auto">

    <!-- [START] Side -->
    <div class="flex flex-col justify-between w-1/5 border-r border-gray-200 bg-gray-300">
      
      <!-- [START] Side-Head -->
      <div class="flex flex-col items-center xl:items-start">

        <!-- [START] Side-Head-Menu -->
        <div class="flex flex-col items-start mb-5">
          <router-link 
            :to="route.path"
            class="py-2 px-5 rounded-full hover:text-primary hover:bg-lighter"
            v-for="route in routes_menu" :key="route"
          >
            <i :class="route.meta.icon"></i>
            <span class="ml-5 text-lg hidden xl:inline-block cursor-pointer">{{ route.meta.title }}</span>
          </router-link>
        </div>
        <!-- [E N D] Side-Head-Menu -->
      </div>
      <!-- [E N D] Side-Head -->

      <!-- [START] Side-Foot -->
      <div class="xl:pr-3 mb-3">
        <button class="w-full h-12 px-2 py-1 hidden xl:flex rounded-full hover:bg-blue-50 items-center">
          <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full"/>
          <div class="hidden xl:ml-2 xl:block">
            <div class="text-sm font-bold">imyunsang</div>
            <div class="text-xs text-gray-500 text-left">yunsang</div>
          </div>
        </button>
        
        <div class="flex justify-center xl:hidden">
          <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"/>
        </div>
      </div>
      <!-- [E N D] Side-Foot -->

    </div>
    <!-- [E N D] Side -->

    <!-- [START] Main -->
    <div class="flex-1 flex h-screen">
      <router-view></router-view>
    </div>
    <!-- [E N D] Main -->
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import router from '@/router'

export default {
  setup() {
    const routes = ref([])
    const routes_menu = computed(() => {
      return routes.value.filter(route => route.meta.is_menu )
    })

    onBeforeMount(() => {
      routes.value = router.options.routes
    })

  

    return {
      routes, routes_menu
    }
  }
}
</script>

<style>

</style>