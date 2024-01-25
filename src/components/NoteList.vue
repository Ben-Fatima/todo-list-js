<script>
import { computed } from 'vue'
import NoteItem from './NoteItem.vue'
import { useNotesStore } from '@/stores/notes'

export default {
  components: {
    NoteItem
  },
  setup() {
    const store = useNotesStore()
    store.fetchNotes()

    const notes = computed(() => store.notes)

    return {
      notes
    }
  }
}
</script>

<template>
  <div class="w-full flex justify-center items-center min-h-screen">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-4 justify-center items-start">
        <NoteItem v-for="note in notes" :key="note.id" :note="note" class="space-y-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
