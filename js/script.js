const { createApp } = Vue;

createApp({
    data() {
        return {
            discs: []
        };
    },
    methods:{
        getDiscs(){
           axios
           .get('http://localhost/progetti/php-dischi-json/api.php')
           .then(res => {
            this.discs = res.data;
            console.log(this.discs);
            
           });
            
        }

    },
    created() {
        this.getDiscs();
    }
}).mount('#app');