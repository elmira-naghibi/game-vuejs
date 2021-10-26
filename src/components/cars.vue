<template>
    <div>
        <car v-for="(car, index) in cars" :key = index @click.native="deletecar(index)">
            {{ car}}
        </car>
    </div>
</template>



<script>
import car from './partial/car.vue';
export default {
    components: { car },
    props:{
        cars:[]
    },
    methods:{
        deletecar:function(index){
            this.$emit('removecar', index); 
        }
    }
};
</script>



<style scoped>
</style>
