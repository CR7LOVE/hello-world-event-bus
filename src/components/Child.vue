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
                console.log('EventBus--methods',EventBus._events);
            }
        },
        destroyed() {
            console.log('EventBus--destroy',EventBus._events);
        }
    }
</script>

<style scoped>

</style>