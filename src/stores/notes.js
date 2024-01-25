import { defineStore } from 'pinia'
import axios from 'axios'

const api = axios.create({ baseURL: `http://localhost:3000` })
export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
    lastNoteId: 0
  }),
  getters: {
    // getNoteByID
    getNoteById: (state) => (id) => {
      return state.notes.find((note) => note.id === id)
    }
  },
  actions: {
    // fetch all notes
    async fetchNotes() {
      try {
        const response = await api.get('http://localhost:3000/notes')
        this.notes = response.data
      } catch (error) {
        console.error('ERROR Fetching Notes :', error)
      }
    },
    async updateNote(updatedNote) {
      try {
        await api.put(`http://localhost:3000/notes/${updatedNote.id}`, updatedNote)
        const index = this.notes.findIndex((note) => note.id === updatedNote.id)
        if (index !== -1) {
          this.notes[index] = updatedNote
        }
      } catch (error) {
        console.error('ERROR Updating Note:', error)
      }
    },
    async deleteNote(id) {
      try {
        await api.delete(`http://localhost:3000/notes/${id}`)
        this.notes = this.notes.filter((note) => note.id !== id)
      } catch (error) {
        console.error('Error deleting note:', error)
      }
    },
    async addNote(newNote) {
      try {
        const response = await axios.post('http://localhost:3000/notes', newNote)
        this.notes.push(response.data)
      } catch (error) {
        console.error('Error adding note:', error)
      }
    }
  }
})
