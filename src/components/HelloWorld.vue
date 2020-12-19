<template>
    <div>
        <button @click="isSeen=!isSeen">show child</button>
        <child @xxxxx="onChild" v-if="isSeen"/>
    </div>
</template>

<script>
    import Child from "./Child";

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
            onChild(msg) {
                console.log(msg);
            }
        },
    }
</script>