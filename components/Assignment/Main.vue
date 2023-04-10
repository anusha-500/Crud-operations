<template>
  <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
    <button
      type="button"
      class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="showForm = true"
    >
      Add Users
    </button>
  </div>

  <div class="px-12 lg:px-0">
    <!-- Search -->
    <div class="mx-auto w-full max-w-xs lg:max-w-md">
      <label for="search" class="sr-only">Search</label>
      <div class="relative text-white focus-within:text-gray-600">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id="search"
          class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
          placeholder="Search"
          type="search"
          name="search"
        />
      </div>
    </div>
  </div>

  <AssignmentAdd
    v-if="showForm"
    :userData="userData"
    @submit-userdata-data="addUserData"
  />
  <AssignmentList
    :userFormData="userFormData"
    @edit-user-plan="editUser"
    @delete-user-data="deleteUser"
  />
</template>
<script setup lang="ts">
const showForm = ref(false)
const tableData = ['Name', 'Phone']
const userFormData = ref([])
const userData = ref({
  name: '',
  Phone: '',
})
onMounted(() => {
  getUserData()
})
const getUserData = () => {
  // retrieve the stored form data from local storage
  const storedFormData = localStorage.getItem('formData')
  if (storedFormData) {
    userFormData.value = JSON.parse(storedFormData)
  }
}
//Add user data
const addUserData = (data: Object) => {
  userFormData.value.push(data)
  localStorage.setItem('formData', JSON.stringify(userFormData.value))
}
// Edit user data
const editUser = (data: Object, index: number) => {
  userData.value = data
  showForm.value = true
}
// Delete user data
const deleteUser = (data: Object, index: Number) => {
  userFormData.value.splice(index, 1)
}
</script>
