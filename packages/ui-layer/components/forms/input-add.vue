<template>
  <div>
    <label for="company_website" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
       {{ prefix }}
      </span>
      <input type="text" name="company_website" id="company_website" 
        class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" 
        :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
    label: {
        type: String,
        default: "Company WebSite"
    },
    prefix: {
        type: String,
        default: "http://"
    },
    placeholder: {
        type: String,
        default: "www.example.com"
    }
})

</script>

