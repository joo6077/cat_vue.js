var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['사과', '바나나', '딸기'],
        text: '초기 메시지',
        count: 0,
        show: true
    },
    methods:{
        handleClick:function(event){
            alert(event.target);
        }
    }
})

