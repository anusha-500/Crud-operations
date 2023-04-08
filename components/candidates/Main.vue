<template>
  <div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        @click="showForm = true"
        type="button"
        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Candidates
      </button>
    </div>
    <candidatesAdd
      v-if="showForm"
      :candidateData="candidateData"
      @submit-candidate-data="getCandidateData"
    ></candidatesAdd>
    <candidatesList :tableData="tableData" :candidates="candidates" />
  </div>
</template>
<script setup lang="ts">
const showForm = ref(false)
const tableData = [
  'Name',
  'Type',
  'MAx Time Allowed',
  'Due Date',
  'Difficulty Level',
  'Description',
  'Multiple Attempts Allowed',
]
const candidateData = ref({
  name: '',
  type: '',
  max_time_allowed: '',
  due_date: '',
  difficulty_level: '',
  description: '',
  questions: {},
  multiple_attempts_allowed: '',
  instructions: {},
  status: '',
})
//const propertyIndex = ref[0]

const { data: candidates } = await useAuthLazyFetch(
  'https://v7-stark-db-orm.mercury.infinity-api.net/api/mock-interviews/',
)
const getCandidateData = async (data: Object) => {
  // Set options for candidate data
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmFiODllYjM3ZDVkNDA0N2I2NWM0Zjc3M2IxZjY0MjgiLCJkIjoiMTY4MDA4MiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzkzNzN9.2snZo16C4_nVx2UPL0NBEqCmKjUyeK_xE-IzLoXqzsM',
    },
    body: JSON.stringify(data),
  }
  const { data: response } = await useAuthLazyFetchPost(
    `https://v7-stark-db-orm.mercury.infinity-api.net/api/mock-interviews/`,
    options,
  )
  // Unshift the record
  candidates.value.unshift(response._rawValue)
}
</script>
