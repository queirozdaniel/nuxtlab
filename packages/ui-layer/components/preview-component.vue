<template>
    <div class="py-4 bg-gray-50 border px-6 rounded-sm">
        <h3 class="font-bold mb-4">{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
