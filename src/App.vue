<template>
  <div id="app">
    <li>
      <router-link :to="{name:'homme', params:{ id:this.id }, query:{local:'en', q:'10'}}" active-class="active" exact><a>Home</a></router-link>
    </li>
    <li>
      <router-link to="/one" active-class="active"><a>one/15</a></router-link>

    </li>
    <li>
      <router-link to="/two"><a>two</a></router-link>
    </li>
    <li>
      <router-link to="/three/65"><a>three</a></router-link>
    </li>
    <li>
      <router-link to="/four"><a>four</a></router-link>
    </li>
    <li>
      <router-link to="/five"><a>five</a></router-link>
    </li>
    <router-view name="sixcom">header</router-view>
    <router-view></router-view>
    <router-view name="sevencom">footer</router-view>

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
      id:45
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
