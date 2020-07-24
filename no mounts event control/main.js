var app = new Vue({
    el: '#app',
    data: {
       scrollY: 0,
       timer: null
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            if(this.timer === null){
                this.timer = setTimeout(() => {
                    this.scrollY = window.scrollY
                    console.log(this.scrollY);
                    console.log(this.timer)
                    console.log(this.timer)
                    this.timer=null
                }, 200)
            }
        },
        scrollTop(){
            scroll.animateScroll(0)
        }
    }
})

