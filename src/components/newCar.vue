<template>
  <div class="">
    <input type="text" 
           style="border:1px solid green; width:200px; margin:10px; padding:10px; cursor:pointer" 
           v-model="car" @keyup.space.enter="createCar"/>
    <button style="border:1px solid green; width:200px; margin:10px; padding:10px; cursor:pointer"
            @click="createCar">
      adding
    </button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      car:"",
    };
  },
  methods: {
    createCar:function() {
      if(this.car){
      this.$emit("carAdded", this.car);
      this.car = "";
      }
    }
  },

};
</script>



<style scoped>

</style>
