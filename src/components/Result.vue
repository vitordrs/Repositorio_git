<script setup>
    const props = defineProps(['estado', 'getOperationExtends'])
</script>
<template>
    <div class="result mt-5 text-center">
        <h2>A {{ getOperationExtends() }} resultou em: </h2>
        <span class="fs-1">{{ estado.result }}</span>
    </div>
</template>