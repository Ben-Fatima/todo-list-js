import { createRouter, createWebHistory } from 'vue-router'
import { NoteList, NoteEditor, AddNote } from '../components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NoteList // todo: make this in a home page that has a menu to navigate between sections
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: NoteEditor
    },
    {
      path: '/add',
      name: 'add',
      component: AddNote
    }
  ]
})

export default router
