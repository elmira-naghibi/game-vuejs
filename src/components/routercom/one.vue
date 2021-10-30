<template>
    <div style="font-size:45px;border:1px solid red; width:200px; margin:10px; padding:10px; cursor:pointer">
       <h1> one </h1>
       <p>{{ id }}</p>
       <button @click="gototwo()">go to two</button>
    </div>
</template>
<script>
export default {
 data() {
     return {
         id: this.$route.params.id
         
     }
 },
 methods: {
     gototwo:function(){
         this.$router.push("/three")
     }
 },
}
</script>
