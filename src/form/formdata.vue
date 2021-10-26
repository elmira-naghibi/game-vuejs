<template>
    <div>
        <div style="border:1px solid green;margin:10px;padding:10px;">
            <div>input text</div>
            <input v-model="message" placeholder="edit me">
            <p>Message is: {{ message }}</p>
        </div>


        <div style="border:1px solid green;margin:10px;padding:10px;">
            <div>check box</div>
            <input type="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </div>


        <div style="border:1px solid green;margin:10px;padding:10px;">
            <div>check box multi</div>
            <input type="checkbox"  value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox"  value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox"  value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>


        <div style="border:1px solid green;margin:10px;padding:10px;">
            <div>radio</div>
           <input type="radio" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>


        <div style="border:1px solid green;margin:10px;padding:10px;">
            <div>select</div>
            <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>


        <div>
            <div>multi select</div>
            <select v-model="selectedMulti" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>Selected: {{ selectedMulti }}</span>
        </div>

        <div>
            <div>v-for</div>
            <select v-model="selectedoptions">
                <option v-for="(option, index) in options" :value="option.value" :key=index>
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ selectedoptions }}</span>
        </div>

        <div>
            <div> example </div>
            <!-- `picked` is a string "a" when checked -->
            <input type="radio" v-model="pickedexample" value="a">
            {{pickedexample}}

            <!-- `toggle` is either true or false -->
            <input type="checkbox" v-model="toggleexample">
            {{toggleexample}}

            <!-- `selected` is a string "abc" when the first option is selected -->
            <select v-model="selectedexample">
                <option value="abc">ABC</option>
            </select>
            {{selectedexample}}
        </div>



    </div>
</template>



<script>
export default {
    data() {
        return {
            message:"",
            checked:false,
            checkedNames:[],
            picked:"",
             selected:"",
            selectedMulti:[],
            selectedoptions: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            pickedexample:"",
            toggleexample:"",
            selectedexample:""

        }
    },
    methods:{
    }
};
</script>



<style scoped>
</style>
