<template>
    <div>
        <child/>
        <child2/>
    </div>
</template>

<script>
    import Child from "./Child";
    import Child2 from "./Child2";

    export default {
        components: {
            Child,
            Child2
        },
        name: 'HelloWorld',
    }
</script>