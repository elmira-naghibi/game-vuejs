<template>
  <div id="app">
    <headercar :carLength = carLength :maxNumberCars= maxNumberCars ></headercar> 
    <new-car @carAdded="addingNewcar"></new-car>
    <cars :cars = cars @removecar="deletingcar"></cars>
  </div>
</template>

<script>
import cars from './components/cars.vue';
import headercar from './components/headercar.vue';
import NewCar from './components/newCar.vue';

export default {
  name: "App",
  components: { headercar,cars, NewCar },
  data() {
    return {
      cars:["benz","pride"],
      maxNumberCars:10,
     };
  },
  computed: {
    carLength:function(){
      return this.cars.length
    }
  },
  methods: {
    addingNewcar:function(car) {
      if(this.cars.length >= this.maxNumberCars){
        return alert("removeing car")
      }
      this.cars.push(car)
    },

    deletingcar:function(index) {
      console.log("app",index)
      this.cars.splice(index, 1);
    }
    
  },
};
</script>

<style>


</style>
