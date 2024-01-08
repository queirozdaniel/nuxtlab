<script setup lang="ts">
const { layer } = useAppConfig()
</script>

<template>
  <div class="bg-primary-300">
    <h1>Hello World !!</h1>
    <h1 class="text-3xl font-bold p-4 text-primary-500"  title="heading 1"> 
      {{ layer.name }}
    </h1>
    <!-- <pre>{{ layer }}</pre> -->
  </div>
</template>
