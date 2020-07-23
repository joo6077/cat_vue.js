var app = new Vue({
    el: '#app',
    data: {
        list:[]
    },
    created:function() {
        axios.get('list.json').then(response => {
            this.list = response.data;
        }).catch(error => {
            console.error(error);
        })
    },
})

