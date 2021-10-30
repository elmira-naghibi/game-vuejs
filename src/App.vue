<template>
  <div id="app">
    <li>
      <router-link to="/" active-class="active" exact><a>Home</a></router-link>
    </li>
    <li>
      <router-link to="/one" active-class="active"><a>one</a></router-link>
    </li>
    <li>
      <router-link to="/two"><a>two</a></router-link>
    </li>
    <li>
      <router-link to="/three"><a>three</a></router-link>
    </li>
    <li>
      <router-link to="/four"><a>four</a></router-link>
    </li>
    <li>
      <router-link to="/five"><a>five</a></router-link>
    </li>
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
.active{
  background: lightgreen;
}
</style>
