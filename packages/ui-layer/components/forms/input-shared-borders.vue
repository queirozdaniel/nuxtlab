<template>
  <div>
    <fieldset>
      <legend class="block text-sm font-medium text-gray-700">Card Details</legend>
      <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
        <div>
          <label for="card-number" class="sr-only">Card number</label>
          <input type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 px-3 py-2 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="Card number" />
        </div>
        <div class="flex -space-x-px">
          <div class="w-1/2 flex-1 min-w-0">
            <label for="card-expiration-date" class="sr-only">Expiration date</label>
            <input type="text" name="card-expiration-date" id="card-expiration-date" class="focus:ring-indigo-500 px-3 py-2 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="MM / YY" />
          </div>
          <div class="flex-1 min-w-0">
            <label for="card-cvc" class="sr-only">CVC</label>
            <input type="text" name="card-cvc" id="card-cvc" class="focus:ring-indigo-500 px-3 py-2 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="CVC" />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>