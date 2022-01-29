<template>
  <q-header
    class="page-header absolute-top"
    :class="theme.classes"
    :bordered="!$q.dark.isActive"
    :elevated="$q.dark.isActive">
    <q-toolbar>
      <slot name="buttons-left" />

      <q-toolbar-title
        class="page-header-title text-center text-body1 q-px-none">
        <slot name="title" />
      </q-toolbar-title>

      <q-space></q-space>
      <slot name="buttons-right" />
    </q-toolbar>
  </q-header>
  <!-- <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered absolute-top bg-light text-dark">
    <div class="q-toolbar row no-wrap items-center">
      <slot name="buttons-left" />
      <div
        class="page-header-title q-toolbar__title ellipsis text-body1 q-px-none">
        <slot name="title" />
      </div>
    </div>
  </header> -->
</template>

<script lang="ts" setup>
import { useTheme } from '../store/theme';

let theme = useTheme();
</script>
