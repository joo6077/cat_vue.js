Vue.component('com-child', {
    // props 전달
    template: `<p id="child" class="child">{{val}}</p>`,
    // props: ['val']
    // bind 했을 때
    props: ['val']
})
Vue.component('com-child1',{
    template: `<li>
    {{name}} HP.{{hp}}
    <button @click="doAttack">공격하기</button>
    </li>`,
    // 타입 지정
    props: {
        hp: Number,
        name: String
    },
    methods: {
        doAttack: function(){
            //자식에서 prop값 변경 불가능
            this.hp -= 10
        }
    }
})
Vue.component('com-child2', {
    template: `<button @click="handleClick">이벤트 호출하기</button>`,
    methods: {
        handleClick: function(){
            this.$emit('childs-event')
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
       message: 'Hello child!',
       list: [
           {id: 1, name: '슬라임', hp: 100},
           {id: 2, name: '고블린', hp: 200},
           {id: 3, name: '드래곤', hp: 500}
       ]
    },
    methods:{
        parentsMethod: function(){
            alert('이벤트를 받았습니다!')
        }
    }
})

