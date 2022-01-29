<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    // TODO: Support dark mode
    this.$q.dark.set(false);
  },
});
</script>
