<template>
  <router-view />
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useTheme } from './store/theme';
const theme = useTheme();

onBeforeMount(() => {
  theme.initializeColor();
});
</script>
