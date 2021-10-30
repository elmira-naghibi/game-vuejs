<template>
  <div id="app">
    <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <transition name="flip" mode="out-in">
    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component> 
        </transition>
              </div>
    </div>
  </div>
  </div>
</template>

<script>
import question from "./components/projectMath/question.vue";
import answer from "./components/projectMath/answer.vue";
export default {
    components: {
    appQuestion: question,
    appAnswer: answer
  },
  name: "App",
  data() {
    return {
      mode: "app-question"
    };
  },
  methods: {
    answered(isCorrect) {
      console.log("isCorrect",isCorrect)
      if (isCorrect) {
        this.mode = "app-answer";
      } else {
        this.mode = "app-question";
        alert("Wrong, try again!");
      }
    }
  }
}
</script>
<style>

flip-enter {
  /*transform: rotateY(0deg);*/
}

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {
  /*transform: rotateY(0deg);*/
}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}


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
