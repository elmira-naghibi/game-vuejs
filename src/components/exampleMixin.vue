<template>
    <div style="border:1px solid red">
        DIV PARTIAL
        <input type="text" v-model="filterText" >
      {{ filterText }}
      <p v-for="car in filteredcars" :key="car">{{ car }}</p>
    </div>
</template>



<script>
import {carMixin} from "../cars.js"
export default {
    mixins:[carMixin],
    created() {
    console.log("cars");
  }

}
</script>



<style scoped>

</style>
