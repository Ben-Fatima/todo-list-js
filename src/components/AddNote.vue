<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import { useRouter } from 'vue-router'

const note = ref({ title: '', content: '' })
const store = useNotesStore()
const router = useRouter()

const submitNote = async () => {
  await store.addNote(note.value)
  // I have an issue here, the id should be auto-increment
  router.push('/')
}
</script>

<template>
  <div class="max-w-xl mx-auto mt-10">
    <form @submit.prevent="submitNote" class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="title"> Title </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Note title"
          v-model="note.title"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="content"> Content </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          placeholder="Note content"
          v-model="note.content"
          rows="3"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save Note
        </button>
      </div>
    </form>
  </div>
</template>
