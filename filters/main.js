//전역변수
// Vue.filter('localeNum', function(val){
//     return val.toLocaleString()
// })

var app = new Vue({
    el: '#app',
    data: {
       price: 19800,
       message: 'diarrhea',
       foo: 'foo',
       value: 2.5444
    },
    //로컬변수
    filters: {
        localeNum: function(val) {
            return val.toLocaleString()
        },
        filter: function(message, foo, num){
            console.log(message, foo, num)
            return message
        },
        round: function(val){
            console.log('1')
            return Math.round(val * 100) / 100
        },
        radian: function(val){
            console.log('2')
            return val * Math.PI / 180
        }
    },
    methods:{
        
    }
})

