<template>
    <div>
        <button>
            child
        </button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        mounted() {
            this.register();
            this.dispatch();
        },
        methods: {
            register() {
                this.$on('aaaa', console.log)
            },

            dispatch() {
                this.$emit('aaaa', '自己内部玩')
            }
        }
    }
</script>

<style scoped>

</style>