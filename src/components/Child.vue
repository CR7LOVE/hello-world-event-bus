<template>
    <div>
        <button>
            child
        </button>
    </div>
</template>

<script>
    import EventBus from "../utils/EventBus";
    export default {
        name: "Child",
        mounted() {
            this.registerOnce();
        },
        methods: {
            registerOnce() {
                EventBus.$on('aa', console.log);
            }
        },
        destroyed() {
            console.log('EventBus',EventBus)
        }
    }
</script>

<style scoped>

</style>