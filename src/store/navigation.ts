import { defineStore } from 'pinia';
import {
  outlinedHome as iHome,
  outlinedQuestionAnswer as iQuestion,
  outlinedPhotoAlbum as iGallery,
} from '@quasar/extras/material-icons-outlined';
export const useNavigation = defineStore('$navigation', {
  state: () => ({
    navItems: [
      {
        root: '/home',
        to: '/home',
        icon: iHome,
        label: 'Home',
      },
      {
        root: '/questions',
        to: '/questions',
        icon: iQuestion,
        label: 'Questions',
      },
      {
        root: '/images',
        to: '/images',
        icon: iGallery,
        label: 'Images',
      },
    ],

    usePageTransition: false,
    iosBrowserSwipingBack: false,
  }),
  actions: {
    setRoot(root: string, toPath: string) {
      const navItemIndex = this.navItems.findIndex(
        (navItem) => navItem.root === root
      );

      this.navItems[navItemIndex].to = toPath;
    },
  },
});
