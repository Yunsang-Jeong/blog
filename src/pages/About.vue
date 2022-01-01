<template>
  <div>
    <Markdown :location="location" />
  </div>
</template>

<script>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import Markdown from '@/components/Markdown.vue';

export default {
  components: { Markdown },
  setup(props){
    const index = inject('index')
    const router = useRoute()

    const id = 0
    const location = index[id].location
    const title = index[id].title
    const publishd = index[id].publishd
    const last_updated = index[id].last_updated
    const tags = index[id].tags

    return {
      id, location, title, publishd, last_updated, tags
    }
  }
}
</script>