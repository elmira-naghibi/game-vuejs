<template>
    <div>
        <div :style="{width: (carLength / maxNumberCars) * 100 + '%'}" style="background:red">
        {{ carLength }} / {{ maxNumberCars}}
        </div>
    </div>
</template>



<script>
export default {
    props:{
        carLength:Number,
        maxNumberCars:Number
    }

};
</script>



<style scoped>
</style>
