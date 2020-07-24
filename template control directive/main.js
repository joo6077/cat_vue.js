var app = new Vue({
    el: '#app',
    data: {
        message: 'Vue.js!',
        message1: 'Hello <strong>Vue.js!</strong>'
    },
    methods:{
        
    },
    mounted: function(){
        console.log(this.$el);
        console.log(this.$refs.hello);
    },
    methods: {
        handleClick(){
            var count = this.$refs.count
            if(count){
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        }
    }
})

