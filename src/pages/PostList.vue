<template>
  <div class="grid grid-flow-col gap-10">
    <div v-for="(info, id) in index" :key=id>
      <a :href="`/blog/posts/${id}`">
        <div class="text-5xl font-extrabold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {{ info.title }}
          </span>
        </div>
      </a>
    </div>    
  </div>
</template>

<script>
import { inject } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: { },
  setup(props){
    const route = useRoute()
    const index = inject('index')
    return {
      index
    }
  }
}
</script>