<template>
    <div class="container bg-slate-50-50">
        <slot />
    </div>
</template>

<style scoped>
.container {
    @apply w-full h-screen p-8 flex flex-col items-start;
}
</style>