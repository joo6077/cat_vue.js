Vue.directive('example',{
    //DOM 요소, 객체 정보, 요소에 대응되는 vnode, 변경이전의 vnode
    bind: function(el, binding, vnode, oldVnode){
        console.log(el, binding)
        console.log(vnode, oldVnode)
    }
})
var app = new Vue({
    el: '#app',
    data: {
       value: 'dd',
       video1: false,
       video2: false
    },
    //자바스크립트 DOM 조작같은 느낌
    directives: {
        focus: {
            inserted: function(el){
                console.log('된다!')        
                el.focus()        
            }
        },
        video(el, binding){
            if(binding.value !== binding.oldValue){
                binding.value ? el.play() : el.pause()
            }
        }
    },
    methods:{
        
    }
})

