export const carMixin = {
    data() {
      return {
        cars:["benz","pride","pezho","lamborgini"],
        filterText:""
       };
    },
    computed: {
      filteredcars:function(){
         return this.cars.filter(element => {
          return element.match(this.filterText);
        });
      }
    },
    created() {
        console.log('Created asliiii');
    }
  };