import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '@/views/NoteView.vue'
import DisplayNoteView from '@/views/DisplayNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/note',
      name: 'note',
      component: NoteView,
    },
    {
      path: '/display-note',
      name: 'displayNote',
      component: DisplayNoteView,
    },
  ],
})

export default router
