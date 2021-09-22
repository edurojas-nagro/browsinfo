<template>
    <div id="main">
        <div class="container bg-dark text-white p-3" style="width: 45%">
            <p class='lead'>
                <b>URL page: </b>{{dados.pageURL}} <br>
                <b>Dominio: </b>{{dados.pageURL}} <br>
                <b>File: </b>{{dados.pathname}} <br>
                <b>Protocolo: </b>{{dados.protocolo}} <br>
            </p>
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
    name: "dadosScreen",
    data(){
        return {
            dados: {}
        }
    },
    methods: {
        renderDados(){
            if(process.server) {return;}
            this.dados.pageURL = location.href
            this.dados.hostName = location.hostname
            this.dados.pathname = location.pathname
            this.dados.protocolo = location.protocol
            
        }
        
    },

    created(){
        this.renderDados()
    }
};
</script>
<style>
#main{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#Cor{
    /* border: 2px solid red; */
    width: 22px;
    height: 22px;
    display: inline-block;
}
</style>
