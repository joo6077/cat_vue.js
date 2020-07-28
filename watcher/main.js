var app = new Vue({
    el: '#app',
    data: {
       message: 'Hello Vue.js!',
       list: [
        {id: 1, name: '슬라임', hp: 100},
        {id: 2, name: '고블린', hp: 200},
        {id: 3, name: '드래곤', hp: 500}
        ],
        count: 0,
        width: 500,
        height: 600
    
    },
    watch: {
        'message': function(newVal, oldVal){
            //console.log(oldVal)
            //console.log(newVal)
        },
        list: {
            handler: function(oldVal, newVal){
                //console.log(oldVal)
                //console.log(newVal)
            },
            //객체 자체를 감시
            deep: true,
            //처음에도 호출
            immediate: true
        },
        //computed 감시가능
        watchTarget: function(){
            console.log('width 또는 height가 변했습니다.')
        }
    },
    created: function() {
        // var unwatch = this.$watch('message', function(oldVal, newVal){
        //     console.log(oldVal, newVal);
        //     this.count++;
        //     if(this.count === 2){
        //         //watch 끝내기!
        //         unwatch();
        //         console.log('watch가 끝났습니다.')
        //     }
        // }),
        unwatch1 = this.$watch(function(){
            return [this.message, this.list]
        }, function(){
            console.log(this.message, this.list)
        }, {deep: true})
    },
    computed: {
        watchTarget: function(){
            return [this.width, this.height]
        }
    }
})

