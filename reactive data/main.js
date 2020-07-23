var app = new Vue({
    el: '#app',
    data: {
        message: {
            value: 'Vue.js!'
        },
        list: ['사과','바나나', '딸기'],
        num: 1,
        text: 'hello Vue.js!',
        scroll: 0,
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        radius: 50,
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        }
    },
    mounted: function() {
        this.scroll = 100
    },
    methods: {
        increment: function() {
            // this를 미리 설정
            var vm = this
            setTimeout(() => {
                vm.count += 1
            }, 1000);
        }
    },
})

