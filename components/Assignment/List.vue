<template>
  <input
    type="text"
    name="project-name"
    id="project-name"
    class="block w-600 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    placeholder="Please serach..."
  />
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="(user, index) in userFormData"
      :key="user.name"
      class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <country-flag country="in" size="big" />
            <span class="flag-icon flag-icon-gr"></span>
            <span class="flag-icon flag-icon-gr flag-icon-squared"></span>
            <h3 class="truncate text-sm font-medium text-gray-900">
              Name:{{ user.name }}
            </h3>
            <span
              class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
            >
              Phone: {{ user.phone }}
            </span>
            <span
              href="#"
              class="text-indigo-600 hover:text-indigo-900 cursor-pointer"
              @click="emit('edit-user-plan', user, index)"
            >
              Edit
            </span>
            <span
              href="#"
              class="text-indigo-600 hover:text-red-900 ml-4 cursor-pointer"
              @click="showDeleteModal = true"
            >
              Delete
            </span>
          </div>
          <p class="mt-1 truncate text-sm text-gray-500"></p>
        </div>
      </div>
      <!-- Delete confirmation modal -->
      <TransitionRoot as="template" :show="showDeleteModal">
        <Dialog as="div" class="relative z-10" @close="showDeleteModal = false">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
              class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
                >
                  <div>
                    <div
                      class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
                    ></div>
                    <div class="mt-3 text-center sm:mt-5">
                      <DialogTitle
                        as="h3"
                        class="text-base font-semibold leading-6 text-gray-900"
                      >
                        Are you sure
                      </DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to delete project
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
                  >
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      @click="
                        emit('delete-user-data', index),
                          (showDeleteModal = false)
                      "
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      @click="showDeleteModal = false"
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <!-- Delete confirmation modal -->
      <div>
        <Bar :data="data" :options="options" />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import CountryFlag from 'vue-country-flag-next'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const props = defineProps({
  userFormData: Array,
})
const showDeleteModal = ref(false)
//const userIndex = ref(0)
const selectedUser = ref({})
const emit = defineEmits(['edit-user-data', 'delete-user-data'])
</script>
