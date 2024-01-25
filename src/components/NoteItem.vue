<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/notes'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const store = useNotesStore()

const editNote = () => {
  router.push({ name: 'edit', params: { id: props.note.id } })
}

const deleteNote = async () => {
  await store.deleteNote(props.note.id)
}
</script>

<template>
  <div class="p-4 border rounded shadow-sm max-w-sm mx-auto">
    <div class="flex items-center">
      <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-blue-600"
        @change="toggleNoteStatus"
        v-model="note.done"
      />
      <h3
        :class="{ 'line-through': note.done, 'text-gray-200': !note.done }"
        class="text-lg font-semibold break-words ml-2"
      >
        {{ note.title }}
      </h3>
    </div>
    <p class="text-gray-300 break-words mt-2" :class="{ 'opacity-50': note.done }">
      {{ note.content }}
    </p>
    <div class="mt-4 flex space-x-2">
      <button
        @click="editNote"
        class="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 ease-in-out hover:bg-blue-600"
      >
        Edit
      </button>
      <button
        @click="deleteNote"
        class="bg-red-500 text-white px-3 py-1 rounded transition duration-300 ease-in-out hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
