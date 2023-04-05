<template>
  <div v-show="open" class="flex flex-row items-center h-16 bg-white w-full">
    <div class="flex-grow">
      <div class="relative w-full">
        <input
          v-model="noteData"
          type="text"
          class="flex w-full border rounded-lg focus:outline-none border-gray-300 focus:border-indigo-300 h-10"
        />
      </div>
    </div>
    <div class="ml-4">
      <button
        class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white p-2 px-3 flex-shrink-0"
        @click="updateData"
      >
        <span>Update</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue'
interface NoteProps {
  uid: Number
  note: String
  open: Boolean
}
const props = defineProps<NoteProps>()
const emit = defineEmits(['edit'])
let noteData = props.note

async function updateData() {
  const postoptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmFiODllYjM3ZDVkNDA0N2I2NWM0Zjc3M2IxZjY0MjgiLCJkIjoiMTY4MDA4MiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzkzNzN9.2snZo16C4_nVx2UPL0NBEqCmKjUyeK_xE-IzLoXqzsM`,
    },
    body: {
      entity_id: '1143',
      project_id: '1',
      note: noteData,
      entity: 'CONTACTS',
    },
  }
  const { data: response } = await useAuthLazyFetch(
    'https://v1-orm-lib.mars.hipso.cc/notes/c26209d4-0ff7-439f-ad71-b8cd18dce9f1',
    postoptions,
  )
  emit('edit', postoptions.body)
}
</script>
