<template>
    <div class="containerr" id="teste">
        <div class="jumbotron bg-light p-4" style="border-radius: 15px;">
            <h1 class="display-5">Dados do Browser</h1>
            <div class="row">
                <div class="col-md-12">
                    <h4>Geolocalização</h4>
                    <table class="table text-white text-left table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Descrição</th>
                                <th scope="col" class='centralizar'>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b>Latitude</b>
                                </td>
                                <td class='centralizar'>{{lati}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Longitude</b>
                                </td>
                                <td class='centralizar'>{{long}}</td>
                        
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="jumbotron bg-light p-4" style="border-radius: 15px;">
            <h1 class="display-5">Dados do Browser</h1>
            <div class="row">
                <div class="col-md-12">
                    <h4>Device</h4>
                    <table class="table text-white text-left table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Descrição</th>
                                <th scope="col" class='centralizar'>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b>Sistema Operacional</b>
                                </td>
                                <td class='centralizar'>{{dadosNavegador.so == "Win32" ? "Windows" : "Linux"}}</td>
                        
                            </tr>
                            <tr>
                                <td>
                                    <b>Navegador</b>
                                </td>
                                <td class='centralizar'>{{dadosNavegador.nome == "" ? "Mozilla" : "Chrome"}}</td>
                        
                            </tr>
                            <tr>
                                <td>
                                    <b>Largura</b>
                                </td>
                                <td class='centralizar'>{{screenWidth}}px</td>
                        
                            </tr>
                            <tr>
                                <td>
                                    <b>Altura</b>
                                </td>
                                <td class='centralizar'>{{screenHeight}}px</td>                        
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

         <div class="jumbotron bg-light p-4" style="border-radius: 15px;">
            <h1 class="display-5">Window Location</h1>

            <div class="row">
                <div class="col-md-12">
                    <h4>Url Information</h4>
                    <table class="table text-white text-left table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Descrição</th>
                                <th scope="col" class='centralizar'>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b>Pagina Atual</b>
                                </td>
                                <td class='centralizar'>{{this.currentPage}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Nome do domínio</b>
                                </td>
                                <td class='centralizar'>{{DominioName}}</td>
                        
                            </tr>
                            <tr>
                                <td>
                                    <b>Arquivo da Página</b>
                                </td>
                                <td class='centralizar'>{{this.fileNamePage}}</td>
                        
                            </tr>
                             <tr>
                                <td>
                                    <b>Protocolo</b>
                                </td>
                                <td class='centralizar'>{{this.protocolo}}</td>
                        
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
    components:{vueAddress},
    name: "ficha",
    data(){
        return {
            screenWidth: null,
            screenHeight: null,
            lati: null,
            long: null,
            dadosNavegador : {},
            dadosUrl: {},
            selectedAddress: ""
        }
    },
    methods:{
        getInfo(){
            if(process.server) {return;}
            this.screenWidth = window.screen.width
            this.screenHeight = window.screen.height
            this.dadosNavegador.so = window.navigator.platform,
            this.dadosNavegador.nome = window.navigator.vendor,
            console.log(this.dadosNavegador)
       },

        getLocation(){
            if(process.server) {return;}
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.")
            }

        },

        showPosition(position) {
            console.log("Latitude: " + position.coords.latitude)
            console.log("Longitude: " + position.coords.longitude)
            this.lati = position.coords.latitude
            this.long = position.coords.longitude

        },

        getInfoUrl(){
            if(process.server) {return;}
            this.currentPage = window.location.href,
            this.DominioName = window.location.hostname,
            this.fileNamePage = window.location.pathname
            this.protocolo = window.location.protocol
        },
        selectAddress() {
            console.log(this.selectedAddress = `${address.province}${address.city}${address.detail}`)
        }
    },

    created(){
        this.getInfo()
        this.getLocation()
        this.getInfoUrl()
        this.selectAddress()
    },

    mounted(){
        console.log(address.ip)
        // navigator.getBattery().then(function(battery) {
        //     console.log(battery.level);
        //     // ... and any subsequent updates.
        //     battery.onlevelchange = function() {
        //         console.log(this.level);
        //         if(this.level > 0.80){
        //             console.log('Pronto para tirar do carregador!')
        //         }
        //     };
        // });
    }
};
</script>
<style scoped>
.containerr{
    background-color: lightslategrey;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Segoe UI",Arial,sans-serif;
    font-style: normal;
}

@media(max-width: 800px){
    .containerr{
        flex-wrap: wrap;
    }

    .jumbotron{
        /* border: 3px solid crimson; */
        box-shadow: 10px 10px 10px;
        width: 90% !important;
        height: 70vh;
        margin: 10px;
    }
}

.jumbotron{
    /* border: 3px solid crimson; */
    box-shadow: 10px 10px 10px;
    width: 30vw;
    height: 70vh;
    margin: 10px;
}

th, td{
    color: black;
}

.centralizar{
    text-align: right;
}
h1,h2{
    font-weight: 400;
}
</style>
