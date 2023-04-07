<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          Properties
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title,
          email and role.
        </p>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Property Build Area
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Blocks
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Units
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr v-for="unit in units" :key="unit.name">
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  {{ unit.name }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ unit.property_build_area }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ unit.units }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ unit.total_floors }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ unit.approve_status }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ unit.description }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ unit.description }}
                </td>
                <collectionEditProperties
                  @delete-property="emits('delete-property', unit)"
                  @edit-property="emits('edit-property', unit, index)"
                ></collectionEditProperties>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const emits = defineEmits(['edit-property', 'delete-property'])
const props = defineProps({
  units: {
    type: Array,
    default: () => [],
  },
})
</script>
