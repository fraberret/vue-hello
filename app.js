console.log('it works');

const {createApp}= Vue

createApp({
    data(){
        return{
            message : 'Hello Vue',
            image: './img/rubber_duck.jpeg'
        }
    }
}).mount('#app')