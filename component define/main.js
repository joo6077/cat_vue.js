//전역 선언
Vue.component('my-component',{
    //루트(최상위 부모) 요소는 하나만
    template: '<p>MyComponent</p>',
    //다른 인스턴스와 헷갈리지 않기 위해서.
    data: function(){
        return {

        }
    },
    methods: {

    }
})
//로컬
// var myComponent = {
//     template: '<p>MyComponent</p>'
// }
// new Vue({
//     el: '#app',
//     components: {
//         'my-component': myComponent 
//     }
// })

