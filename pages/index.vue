<template>
<div>
    <h1 class="text-red-500">hello</h1>
    <pre>
        {{ user }}
<Button variant="destructive">Click me</Button>
    </pre>
</div>
</template>

<script lang="ts" setup>
const user = useUser();

definePageMeta({
    middleware: "protected",
})

</script>
