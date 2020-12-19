<template>
    <div>
        <button @click="onChildClick">
            child
        </button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        mounted() {
        },
        methods: {
            onChildClick() {
                this.$emit('xxxxx', '给父组件');
            }
        }
    }
</script>

<style scoped>

</style>