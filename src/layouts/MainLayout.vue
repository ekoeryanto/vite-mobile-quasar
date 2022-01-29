<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="{ 'ios-browser-swiping-back': navigation.iosBrowserSwipingBack }">
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown">
      <q-footer
        v-if="details || !Object.keys($route.params).length"
        :bordered="!$q.dark.isActive"
        :elevated="$q.dark.isActive"
        :class="theme.classes">
        <q-tabs
          :active-color="$q.dark.isActive ? 'white' : 'primary'"
          indicator-color="transparent"
          class="text-grey"
          no-caps>
          <q-route-tab
            v-for="navItem in navigation.navItems"
            :key="navItem.root"
            :to="navItem.to"
            :label="navItem.label"
            :icon="navItem.icon" />
        </q-tabs>
      </q-footer>
    </transition>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useNavigation } from '../store/navigation';
import { useTheme } from '../store/theme';
let theme = useTheme();
defineProps({
  details: Boolean,
});

const navigation = useNavigation();
</script>
