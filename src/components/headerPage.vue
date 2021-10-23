<template>
  <div>
    <h1>{{ index+1 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'headerPage',
  props :{
    index: Number
  }
}
</script>

<style scoped>
h1{
  font-size: 50px;
}
</style>
