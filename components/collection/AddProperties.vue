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
                              v-model="propertyData.name"
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
                              Property Build Area
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.property_build_area"
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
                              Blocks
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.blocks"
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
                              Units
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.units"
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
                              Total Floors
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.total_floors"
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
                              Ppprove Status
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.approve_status"
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
                              address
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.address"
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
                              description
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.description"
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
                              Project Id
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              v-model="propertyData.project_id"
                              type="text"
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
const emit = defineEmits(['submit-Property-data'])
const props = defineProps({
  // Declare props here
  propertyData: Object,
})
const project_id = ref('')

// Save Property
const saveData = async () => {
  let formData = {
    name: propertyData.name.value,
    property_build_area: propertyData.property_build_area.value,
    blocks: '0',
    units: propertyData.units.value,
    total_floors: '0',
    approve_status: 'Active',
    description: propertyData.description.value,
    address: propertyData.address.value,
    avg_price: 0,
    flats_in_floor: 0,
    prefs: {
      available: 'Boy',
      suited: 'Students',
      allowed_non_veg: true,
      allowed_opposite_sex: true,
      allowed_any_time: true,
      allowed_visitors: true,
      allowed_drinking: true,
    },
    project_id: propertyData.project_id,
    visit_count: 0,
  }
  // To assign uid to edit form
  if (props.PropertyData && props.PropertyData.uid)
    formData['uid'] = props.PropertyData.uid
  emit('submit-Property-data', formData)
}
</script>
