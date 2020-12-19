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

                this.$once('hook:beforeDestroy', function () {
                    EventBus.$off(); // 必须用 off，否则，之前注册的函数一直存在，即使组件被销毁了也在
                    // EventBus.$off('aa');
                    // EventBus.$off('aa', console.log);
                })
            }
        }
    }
</script>

<style scoped>

</style>