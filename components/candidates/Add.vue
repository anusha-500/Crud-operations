<template>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
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
                <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                  <form
                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                  >
                    <div class="flex-1">
                      <!-- Header -->
                      <div class="bg-gray-50 px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between space-x-3">
                          <div class="space-y-1">
                            <DialogTitle
                              class="text-base font-semibold leading-6 text-gray-900"
                            >
                              New project
                            </DialogTitle>
                            <p class="text-sm text-gray-500">
                              Get started by filling in the information below to
                              create your new project.
                            </p>
                          </div>
                          <div class="flex h-7 items-center">
                            <button
                              type="button"
                              class="text-gray-400 hover:text-gray-500"
                              @click="open = false"
                            >
                              <span class="sr-only">Close panel</span>
                              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Divider container -->
                      <div
                        class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0"
                      >
                        <!-- Project name -->
                        <div
                          class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Name
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="candidateData.name"
                              type="text"
                              name="project-name"
                              id="project-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Max Time Allowed
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="candidateData.max_time_allowed"
                              type="number"
                              name="project-name"
                              id="project-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Due Date
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="candidateData.due_Date"
                              type="datetime-local"
                              name="project-name"
                              id="project-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Difficulty Level
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <select
                              id="difficulty-level"
                              name="difficulty-level"
                              class="sm:col-span-2mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              v-model="candidateData.difficulty_level"
                            >
                              <option selected="Easy">
                                Easy
                              </option>
                              <option selected="Medium">
                                Medium
                              </option>
                              <option selected="Hard">Hard</option>
                            </select>
                          </div>
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Description
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="candidateData.description"
                              type="text"
                              name="project-name"
                              id="project-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Questions
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <select
                              id="category"
                              name="category"
                              class="sm:col-span-2mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              v-model="candidateData.questions"
                            >
                              <option selected="Techinical">
                                Techinical Questions
                              </option>
                              <option selected="Software Skills">
                                Software Skills
                              </option>
                              <option selected="Experience">Experience</option>
                            </select>
                          </div>

                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Multiple Attempts Allowed
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="candidateData.multiple_attempts_allowed"
                              type="number"
                              name="project-name"
                              id="project-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div>
                            <label
                              for="project-name"
                              class="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                              Status
                            </label>
                          </div>

                          <div class="sm:col-span-2">
                            <input
                              v-model="candidateData.status"
                              type="number"
                              name="project-name"
                              id="project-name"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Action buttons -->
                    <div class="flex-shrink-0 px-4 py-5 sm:px-6">
                      <div class="flex justify-end space-x-3">
                        <button
                          type="button"
                          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          @click="open = false"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          @click="saveData"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
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
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
const open = ref(true)
const emit = defineEmits(['submit-candidate-data'])
const props = defineProps({
  // Declare props here
  candidateData: {
    type: Object,
    default: () => [],
  },
})

// Save Property

const saveData = async () => {
  let formData = {
    name: props.candidateData.name,
    type: 'practice',
    max_time_allowed: props.candidateData.max_time_allowed,
    due_date: '2023-04-08T06:51:32',
    difficulty_level: props.candidateData.difficulty_level,
    description: props.candidateData.description,
    questions: {},
    multiple_attempts_allowed: props.candidateData.multiple_attempts_allowed,
    instructions: {},
    status: 0,
    owner_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    last_modified_date: '2023-04-08T06:51:32.289Z',
  }
  emit('submit-candidate-data', formData)
}
</script>
