<template>
  <div>
    <div class="flex justify-between">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <span class="text-sm text-gray-500" id="email-optional">Optional</span>
    </div>
    <div class="mt-1">
      <input type="text" name="email" id="email" 
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 block w-full sm:text-sm border-gray-300 rounded-md" 
      placeholder="you@example.com" aria-describedby="email-optional" />
    </div>
  </div>
</template>