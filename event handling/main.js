var app = new Vue({
    el: '#app',
    data: {
       count: 0,
       message: 'hello Vue.js!'
    },
    methods:{
        handleClick: function(){
            alert('클릭했어요!')
        },
        handleClickEvent: function(e, i){
            console.log(e)
            console.log(i)
        },
        handler(comment){
            alert(comment)
        },
        handleInput(e){
            console.log(e);
            this.message = e.target.value;
        }
    }
})

