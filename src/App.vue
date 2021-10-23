<template>
  <div id="app">
    <div class="con">
      <div class="health">
        <div class="per player" :style="{ width: playerhealth + '%' }">
          {{ playerhealth }}
        </div>
      </div>
      <div class="health">
        <div class="per" :style="{ width: monsterhealth + '%' }">
          {{ monsterhealth }}
        </div>
      </div>
    </div>
    <div class="con">
      <div class="center" v-if="!gameIsRunning">
        <button @click="startGame">start new game</button>
      </div>
      <div class="center" v-else>
        <button @click="attack">attack</button>
        <button @click="specialattack">special Attack</button>
        <button @click="help">heal</button>
        <button @click="giveup">give up</button>
      </div>
    </div>
    <div class="con" v-if="turns.length>0">
      <div class="text" v-for="(turn, index) in turns" :key="index"
           :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
        {{turn.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      playerhealth: 100,
      monsterhealth: 100,
      gameIsRunning: false,
      turns:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerhealth = 100;
      this.monsterhealth = 100;
    },

    giveup: function () {
      this.gameIsRunning = false;
    },

    help: function () {
      if(this.playerhealth <= 90) {
        this.playerhealth += 10;
      } else {
        this.playerhealth = 100;
      }
      this.turns.unshift({
        isPlayer:true,
        text:"player heals for 10"
      })
      this.monsterAttack();
    },

    specialattack: function () {
      var damage = this.calculateDamage(10,20);
      this.monsterhealth -= damage;
      this.turns.unshift({
        isPlayer:true,
        text: " player hits monster  harddddddddddddddd   for " + damage
      })
      if(this.checkWin()){
        return;
      }
      this.monsterAttack();
    },

    attack: function () {
      var damage = this.calculateDamage(3,10);
      this.monsterhealth -= damage
      this.turns.unshift({
        isPlayer:true,
        text: " player hits monster for " + damage
      })
      if(this.checkWin()){
        return;
      }
      this.monsterAttack();
    },

    monsterAttack: function() {
      var damage = this.calculateDamage(5, 12) 
      this.playerhealth -= damage
      this.checkWin();
      this.turns.unshift({
        isPlayer:false,
        text: " monster hits player for " + damage
      })
    },

    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function () {
      if (this.monsterhealth <= 0) {
        if (confirm("you won!! new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerhealth <= 0) {
        if (confirm("you lost!!!!!!!!!!!!!!!!!!! new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.con {
  border: 1px solid salmon;
  font-size: 0;
}
.text{
  font-size: 20px;
  height: 40px;
  line-height: 40px;
margin: 5px;
}
.center {
  text-align: center;
  border: 1px solid;
}
.health {
  width: calc(50% - 22px);
  font-size: 25px;
  font-weight: bold;
  display: inline-block;
  margin: 10px;
  border: 1px solid lightslategrey;
  border-radius: 7px;
}
.per {
  height: 50px;
  line-height: 50px;
  background: lightpink;
  border-radius: 7px;
}

button {
  height: 50px;
  line-height: 50px;
  background: skyblue;
  outline: none;
  border: none;
  margin: 5px;
  width: 200px;
  border-radius: 7px;
}
.player {
  background: lightgreen;
}
.player-turn{
  background: lightpink;
}
.monster-turn{
  background:lightsteelblue ;
}
</style>
