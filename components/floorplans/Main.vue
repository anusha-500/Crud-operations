<template>
  <div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        type="button"
        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="showForm = true"
      >
        Add FloorPlans
      </button>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <floorplansAdd
        v-if="showForm"
        :floorData="floorData"
        @submit-floor-data="getFloorData"
      ></floorplansAdd>
    </div>
    <floorplansList
      :tableData="tableData"
      :FloorPlanData="FloorPlanData"
      @edit-floor-plan="editFloorPlan"
      @delete-floor-data="deletefloorData"
    />
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
const showForm = ref(false)
const floorIndex = ref(0)
const tableData = [
  'Name',
  'Carpet Area',
  'Metric Name',
  'Facing',
  'Bedrooms',
  'Bathrooms',
  'Kitchens',
  'Balconies',
]
const floorData = ref({
  name: '',
  build_up_area: '',
  carpet_area: '',
  metric_name: '',
  facing: '',
  bedrooms: '',
  bathrooms: '',
  kitchens: '',
  project_id: '',
  balconies: '',
})
const { data: FloorPlanData } = await useAuthLazyFetch(
  'https://v1-orm-gharpe.mercury.infinity-api.net/api/floorplans/?offset=0&limit=100&sort_column=id&sort_direction=desc',
  {},
)
const getFloorData = async (form: Object) => {
  // Set options for floor plans
  if (form.uid) return updatefloorPlan(form)
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmFiODllYjM3ZDVkNDA0N2I2NWM0Zjc3M2IxZjY0MjgiLCJkIjoiMTY4MDA4MiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzkzNzN9.2snZo16C4_nVx2UPL0NBEqCmKjUyeK_xE-IzLoXqzsM',
    },
    body: JSON.stringify(form),
  }
  const { data: response } = await useAuthLazyFetchPost(
    `https://v1-orm-gharpe.mercury.infinity-api.net/api/floorplans/`,
    options,
  )
  // Unshift the floor plans
  FloorPlanData.value.unshift(response._rawValue)
}
// Updates floor plans
const updatefloorPlan = async (form: Object) => {
  let options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmFiODllYjM3ZDVkNDA0N2I2NWM0Zjc3M2IxZjY0MjgiLCJkIjoiMTY4MDA4MiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzkzNzN9.2snZo16C4_nVx2UPL0NBEqCmKjUyeK_xE-IzLoXqzsM`,
    },
    body: form,
  }
  const { data: response } = await useAuthLazyFetchPut(
    `https://v1-orm-gharpe.mercury.infinity-api.net/api/floorplans/${form.uid}`,
    options,
  )

  FloorPlanData.value[floorIndex.value] = form
  floorData.value = {}
}
// Edit floor plan
const editFloorPlan = async (data: Object, index: number) => {
  floorData.value = { ...data }
  showForm.value = true
}
// Delete floor plans
const deletefloorData = async (data: Object, index: Number) => {
  await useAuthLazyFetchDelete(
    `https://v1-orm-gharpe.mercury.infinity-api.net/api/floorplans/${data.uid}`,
    {},
  )
  FloorPlanData.value.splice(index, 1)
}
</script>
