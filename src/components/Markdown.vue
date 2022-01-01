<template>
  <div>
    <Markdown :source="source" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'redaxios';
import Markdown from 'vue3-markdown-it';

export default {
  components: { Markdown },
  setup(props, context) {
    const source = ref('')
    const location = context.attrs.location

    onMounted(async () => {
      const resp = await axios.get("/blog/posts/" + location)
      source.value = resp.data
    });

    return {
      source
    }
  }
}
</script>