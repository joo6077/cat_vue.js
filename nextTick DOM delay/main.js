var app = new Vue({
    el: '#app',
    data: {
       list:[]
    },
    watch:{
        list: function(){
            console.log('기본 출력:', this.$refs.list.offsetHeight)
            this.$nextTick(function(){
                console.log('nextTick', this.$refs.list.offsetHeight)
            })
        }
    }
})

