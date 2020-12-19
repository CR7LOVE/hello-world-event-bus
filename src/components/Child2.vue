<template>
    <div>
        <button>
            Child2
        </button>
    </div>
</template>

<script>
    export default {
        name: "Child2",
        mounted() {
            this.registerInFather();
        },
        methods: {
            registerInFather() {
                this.$parent.$on('xxxxx', console.log);
            }
        }
    }
</script>

<style scoped>

</style>