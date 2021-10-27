<template>
  <div id="app">
    <!-- <headercar :carLength = carLength :maxNumberCars= maxNumberCars ></headercar> 
    <new-car @carAdded="addingNewcar"></new-car>
    <cars :cars = cars @removecar="deletingcar"></cars>
    <formdata></formdata>
    <p v-highlight.delayed="'blue'"> salam </p>
    <p v-highlight:background.delayed="'red'"> hello </p>
    
    <p v-local-highlight.delayed.anotherModifier="'blue'"> salam </p>
    <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 200 }"> hello </p>
    <p v-local-highlight >یبسعلششببششششش</p> -->


    
      <p>{{ text | to-uppercase }}</p>
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <input type="text" v-model="filterText" >
      {{ filterText }}
      <p v-for="car in filteredcars" :key="car">{{ car }}</p>
      <example-mixin></example-mixin>



        <button class="" @click="show = !show">Show Alert</button>
        <br />
        <br />
        <transition name="fade" appear>
          <div class="" v-if="show">This is some Info</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="" v-if="show">This is some Info</div>
        </transition>


 <button class="btn btn-primary" @click="load = !load">Load / Remove element</button>
    <br />
    <br />
    <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
    >
      <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div>
    </transition>







  </div>
</template>

<script>
import cars from './components/cars.vue';
import ExampleMixin from './components/exampleMixin.vue';
import headercar from './components/headercar.vue';
import NewCar from './components/newCar.vue';
import formdata from './form/formdata.vue';
import { carMixin } from "./cars.js"

export default {
  name: "App",
  mixins:[carMixin],
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
  components: { headercar,cars, NewCar, formdata, ExampleMixin },
  data() {
    return {
      maxNumberCars:10,
      text:"salam dobare",
      show:false,
      load:true,
      alertAnimation: "fade",
      elementWidth: 100
     };
  },
  computed: {
    carLength:function(){
      return this.cars.length
    },
  },
  filters: {
   toUppercase(value) {
      return value.toUpperCase();
    },

  },
  methods: {
   beforeEnter(el) {
     console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addingNewcar:function(car) {
      if(this.cars.length >= this.maxNumberCars){
        return alert("removeing car")
      }
      this.cars.push(car)
    },

    deletingcar:function(index) {
      console.log("app",index)
      this.cars.splice(index, 1);
    },
  },
  created() {
      console.log('Created app');
  }
}
</script>

<style>
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
      opacity: 0;
   /* transform: translateY(20px); */
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 3s;
}

.slide-leave {

}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

</style>
