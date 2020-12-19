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
                window.a = EventBus;
                console.log('a', window.a)
            },

            getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
            }
        },
        destroyed() {
            const key = this.getRandomInt(1, 100) + 'aaa';
            window[key] = EventBus;
            console.log(key, window[key]);
        }
    }
</script>

<style scoped>

</style>