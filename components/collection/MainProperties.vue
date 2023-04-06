<template>
  <div>
    <collectionAddProperties
      :PropertyData="propertyData"
      @submit-Property-data="submitProperty"
    ></collectionAddProperties>
    <collectionListProperties
      :units="units"
      @edit-property="editProperty"
      @delete-property="deleteProperty"
    ></collectionListProperties>
  </div>
</template>
<script setup>
const propertyData = ref({
  name: '',
  property_build_area: '',
  blocks: '',
  units: '',
  total_floors: '',
  approve_status: '',
  address: '',
  description: '',
})
const propertyIndex = ref[0]
let options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmFiODllYjM3ZDVkNDA0N2I2NWM0Zjc3M2IxZjY0MjgiLCJkIjoiMTY4MDA4MiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzkzNzN9.2snZo16C4_nVx2UPL0NBEqCmKjUyeK_xE-IzLoXqzsM`,
  },
}
const { data: units } = await useAuthLazyFetch(
  'https://v1-orm-gharpe.mercury.infinity-api.net/api/properties/?offset=0&limit=100&sort_column=id&sort_direction=desc',
)
const submitProperty = async (form) => {
  if (form.uid) return updateProperty(form)
  let options = {
    body: JSON.stringify(form),
  }
  const { data: response } = await useAuthLazyFetchPost(
    'https://v1-orm-gharpe.mercury.infinity-api.net/api/properties/',
    options,
  )
  units.value.unshift(form)
}
//For Edit property
const editProperty = async (data, index) => {
  console.log('editProperty', editProperty)
  propertyData.value = { ...data }
  propertyIndex.value = index
}
// Updates templates after edit
const updateProperty = async (form) => {
  let options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmFiODllYjM3ZDVkNDA0N2I2NWM0Zjc3M2IxZjY0MjgiLCJkIjoiMTY4MDA4MiIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMyNzkzNzN9.2snZo16C4_nVx2UPL0NBEqCmKjUyeK_xE-IzLoXqzsM`,
    },
    body: form,
  }
  const { data: addTemplateData } = await useAuthLazyFetchPut(
    `https://v1-orm-gharpe.mercury.infinity-api.net/api/properties/${form.uid}`,
    options,
  )
  units.value[propertyIndex.value] = form
  propertyData.value = {}
}
// Delete Email Templates
const deleteProperty = async (data, index) => {
  await useAuthLazyFetchDelete(
    `https://v1-orm-gharpe.mercury.infinity-api.net/api/properties/${data.uid}`,
  )
  units.value.splice(index, 1)
}
</script>
