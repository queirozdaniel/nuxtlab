<template>
  <div>
    <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <label for="country" class="sr-only">Country</label>
        <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-3 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </select>
      </div>
      <input type="text" name="phone_number" id="phone_number" class="focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md" placeholder="+1 (555) 987-6543" />
    </div>
  </div>
</template>