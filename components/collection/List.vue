<template>
  <div>
    <button
      type="button"
      class="rounded-full bg-blue-600 p-3 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fixed bottom-7 right-7"
      @click="open = true"
    >
      <IconCSS name="ep:plus" size="30"></IconCSS>
    </button>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full md:w-1/2"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen">
                  <div
                    class="flex h-full flex-col overflow-y-hidden bg-white py-6 shadow-xl"
                  >
                    <div class="px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle
                          class="text-base font-semibold leading-6 text-gray-900"
                        >
                          Panel title
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0"
                            @click="open = false"
                          >
                            <span class="sr-only">Close panel</span>
                            <IconCSS
                              name="bx:x"
                              size="30"
                              class="block"
                            ></IconCSS>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="relative mt-6 flex-1 h-full bg-white">
                      <div
                        class="px-4 py-6 sm:px-6 h-[calc(100vh_-_150px)] overflow-y-auto"
                      >
                        <ul role="list" class="space-y-8">
                          <li v-for="(note, index) in notes" :key="note.uid">
                            <div class="flex space-x-3 group">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-10 w-10 rounded-full"
                                  :src="`https://images.unsplash.com/photo-${note.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                                  alt=""
                                />
                              </div>
                              <div class="flex-grow">
                                <div class="text-sm flex items-center">
                                  <a
                                    href="#"
                                    class="font-medium text-gray-900 mr-2"
                                  >
                                    {{ note.note }}
                                  </a>
                                  <div
                                    class="flex items-center invisible group-hover:visible text-gray-500"
                                  >
                                    <IconCSS
                                      name="iconoir:edit-pencil"
                                      size="20"
                                      class="mr-3 hover:text-blue-600"
                                      @click="editNote(note)"
                                    ></IconCSS>

                                    <IconCSS
                                      name="bytesize:trash"
                                      size="16"
                                      class="hover:text-red-600"
                                      @click="deleteNote(note, index)"
                                    ></IconCSS>
                                  </div>
                                </div>
                                <div class="mt-1 text-sm text-gray-700">
                                  <p class="text-wrap">
                                    {{ note.body }}
                                  </p>
                                </div>
                                <div class="mt-1 text-sm text-gray-700">
                                  <CollectionEdit
                                    v-if="editSelectedNote.includes(note.uid)"
                                    :uid="note.uid"
                                    :note="note.note"
                                    :open="true"
                                    @edit="edit"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <CollectionAdd @add="add" />
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ref, reactive } from 'vue'

interface propData {
  uid: Number
  notes: String
  open: Boolean
}
const open = ref(false)
const editSelectedNote = ref([])
const props = defineProps<propData>()
let notes = reactive([])
let offset = 0
const limit = 100
const link = (offset = 0, limit = 100) => {
  return `https://v1-orm-lib.mars.hipso.cc/notes/entity/TASKS/1143?project_id=1&offset=${offset}&limit=${limit}&sort_column=id&sort_direction=desc`
}

const { data: response } = useAuthLazyFetch(link(), { server: false })
notes = response

// Add - add notes
const add = (data) => {
  notes.push({ uid: data.entity_id, body: data.note })
  console.log('notes', notes)
}
// Edit notes
const edit = (data) => {
  notes.value.push({ uid: data.entity_id, body: data.note })
}
// Edit prefill data
const editNote = (note: any) => {
  editSelectedNote.value.push(note.uid)
}
// Delete notes
const deleteNote = async (data, index) => {
  await useAuthLazyFetchDelete(
    `https://v1-orm-lib.mars.hipso.cc/notes/c26209d4-0ff7-439f-ad71-b8cd18dce9f1`,
  )
  notes.value.splice(index, 1)
}
</script>
