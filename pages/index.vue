<template>
    <div class="containerr">
        <div class="jumbotron bg-dark text-white p-5 text-center" style="border-radius: 15px;">
            <h1 class="display-4">Browinfo</h1>
            <p class="lead">
                Gere sua ficha do seu Browser
            </p>
            <hr class="my-4" />
            <p class="lead">
                
                <NuxtLink  to='ficha' class="btn btn-primary btn-lg" href="#" role="button">
                    Gerar
                </NuxtLink >

            </p>
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "index",
};
</script>
<style>

.containerr{
    background-color: lightslategrey;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
