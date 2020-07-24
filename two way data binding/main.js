var app = new Vue({
    el: '#app',
    data: {
       message: 'hello',
       message1: 'hello',
       val: true,
       val1: [],
       val2: '',
       val3: '',
       val4: [],
       val5: 50,
       preview: '',
       price: 500
    },
    methods:{
        handleChange(event){
            var file = event.target.files[0];
            if(file && file.type.match(/^image\/(png|jpeg)$/)){
                this.preview = window.URL.createObjectURL(file)
                console.log(window.URL.createObjectURL(file))
            }
        }
    }
})

