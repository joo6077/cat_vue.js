var app = new Vue({
    el: '#app',
    data: {
        show: true
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
            console.log(count)
            if(count){
                count.innerText = parseInt(count.innerText, 10) + 1
            }else{
                console.log('안됨')
            }
        }
    }
})

