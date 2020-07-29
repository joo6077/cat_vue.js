Vue.component('comp-child',{
    //slot안에 default 값
    template: `
    <div class="comp-child">
        여기에 슬롯을 넣음 -> <slot>나니모 나갓다!</slot>
    </div>
    `
})
Vue.component('comp-child1', {
    template:`
    <header>
        <slot name="header">디폴트 타이틀</slot>
    </header>
    <div class="content">
        <slot>디폴트 콘텐츠</slot>
    </div>
    <slot name="footer">
    </slot>
    `
})

var app = new Vue({
    el: '#app',
    data: {
       
    },
    methods:{
        
    }
})

