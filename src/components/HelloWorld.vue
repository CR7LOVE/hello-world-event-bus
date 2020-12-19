<template>
    <div>
        <button @click="isSeen=!isSeen">toggle child</button>
        <child v-if="isSeen"/>
        <button @click="onChildClick">emit</button>
    </div>
</template>

<script>
    import Child from "./Child";
    import EventBus from "../utils/EventBus";

    export default {
        components: {
            Child,
        },
        name: 'HelloWorld',
        data() {
            return {
                isSeen: true
            }
        },
        methods: {
            onChildClick() {
                EventBus.$emit('aa', '开始用 export 的 EventBus 了')
            }
        }
    }
</script>