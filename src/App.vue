<template>
  <div id="app">
    <!-- <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/one">one</router-link>
    </li>
    <li>
      <router-link to="/two">two</router-link>
    </li>
    <li>
      <router-link to="/three">three</router-link>
    </li>
    <li>
      <router-link to="/four">four</router-link>
    </li>
    <li>
      <router-link to="/five">five</router-link>
    </li> -->
    <router-view></router-view>
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
    };
  },
  methods: {}
}
</script>
<style>
li:first-child{
  margin-left: 40px;
}
li{
  margin: 10px 20px ;
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
}
</style>
