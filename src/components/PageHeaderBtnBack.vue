<template>
  <q-btn
    :icon="$q.iconSet.chevron.left"
    flat
    rounded
    dense
    no-caps
    unelevated
    @click="$router.goBack" />
</template>

<script setup lang="ts"></script>
