var app = new Vue({
    el: '#app',
    data: {
        list:[
            {id: 1, name: '슬라임', hp: 100},
            {id: 2, name: '고블린', hp: 200},
            {id: 3, name: '드래곤', hp: 500}
        ],
        name:'',
        text: '김형주'
    },
    methods:{
        doAdd: function(){
            // reduce 결과물을 하나로 간추려주는 함수(list의 길이만큼 반복)
            // a에 초기값 0이 들어가거나 list[0]부터 시작
            // 첫 실행 후 return 되는 값이 계속 a로 들어감
            // b는 list의 값을 순서대로 넣어줌
            var max = this.list.reduce((a,b) => { return a > b.id ? a : b.id}, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index){
            this.list.splice(index, 1)
        },
        doChange: function(id){
            var listId = id-1;
            this.$set(this.list, listId, { id: listId+1, name: this.name, hp: 500})
        },
        doAttack: function(index){
            this.list[index].hp -= 10;
            //return 값을 반환
            this.list = this.list.filter(item => {
                return item.hp > 0
            })
        }
    },
    created:function() {
        //요소 추가
        this.list.forEach(item => {
            this.$set(item, 'active', false)
        });
    },
})

