<template>
    <div id="main">
        <div class="container bg-dark text-white p-3" style="width: 25%">
            <p class='lead'>
                <b>Largura de tela: </b>{{dados.largura}} <br>
                <b>Altura de tela: </b>{{dados.altura}} <br>
                <b>Aval Width: </b>{{dados.avalLarg}} <br>
                <b>Aval Altura: </b>{{dados.avalAltu}} <br>
                <b>Color Depth: </b>{{dados.corDepth}} <span id="Cor"></span> <br>
                <b>Pixel Depth: </b>{{dados.pixelDepth}} <br>

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
            this.dados.largura = window.screen.width
            this.dados.altura = window.screen.height
            this.dados.avalLarg = window.screen.availWidth
            this.dados.avalAltu = window.screen.availHeight
            this.dados.corDepth = window.screen.colorDepth
            this.dados.pixelDepth = window.screen.pixelDepth

            if (screen.colorDepth <= 8)
                //simple blue background color for 8 bit screens
                document.querySelector("#Cor").style.background = "#0000FF"
                else
                //fancy blue background color for modern screens
                document.querySelector("#Cor").style.background = "#87CEFA" 
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
