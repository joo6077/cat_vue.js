var app = new Vue({
    el: '#app',
    data: {
       budget: 300,
       limit: 2,
       list:[
           {id: 1, name: '사과', price: 100},
           {id: 2, name: '바나나', price: 200},
           {id: 3, name: '딸기', price: 400},
           {id: 4, name: '오렌지', price: 300},
           {id: 5, name: '메론', price: 500}
       ],
       order: false
    },
    computed: {
        matched: function(){
            return this.list.filter((el)=>{
                return el.price <= this.budget
            })
        },
        sorted: function(){
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        limited: function(){
            return this.sorted.slice(0, this.limit)
        }
    },
})

