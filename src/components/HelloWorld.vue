<template>
    <div>
        <child />
    </div>
</template>

<script>
import Child from "./Child";

export default {
  components: {
    Child
  },
  name: 'HelloWorld',
}
</script>