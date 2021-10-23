<template>
  <div>

    <button @click="next">next</button>

  {{q.question}}
  </div>
</template>

<script>
export default {
  name: "bodyQuestion",
    props :{
    q: Object,
    next: Function
  }
};
</script>

<style scoped>
</style>
