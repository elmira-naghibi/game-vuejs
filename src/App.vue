<template>
  <div id="app">
    <headercar :carLength = carLength :maxNumberCars= maxNumberCars ></headercar> 
    <new-car @carAdded="addingNewcar"></new-car>
    <cars :cars = cars @removecar="deletingcar"></cars>
    <formdata></formdata>
    <p v-highlight.delayed="'blue'"> salam </p>
    <p v-highlight:background.delayed="'red'"> hello </p>
    
    <p v-local-highlight.delayed.anotherModifier="'blue'"> salam </p>
    <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 200 }"> hello </p>
    <p v-local-highlight ></p>


  </div>
</template>

<script>
import cars from './components/cars.vue';
import headercar from './components/headercar.vue';
import NewCar from './components/newCar.vue';
import formdata from './form/formdata.vue';

export default {
  name: "App",
   directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
           var delay = 0;
          if (binding.modifiers["delayed"]) {
            delay = 3000;
          }
         if (binding.modifiers["blink"]) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                    currentColor==secondColor ? currentColor = mainColor : currentColor=secondColor
                    if (binding.arg == "background") {
                      el.style.backgroundColor = currentColor;
                    } else {
                      el.style.color = currentColor;
                    }
                },binding.value.delay)
              }, delay)
          }
          else{
            setTimeout(() => {
              if (binding.arg == "background") {
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay);
          }
      }
    }   
  },
  components: { headercar,cars, NewCar, formdata },
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
}
</script>

<style>


</style>
