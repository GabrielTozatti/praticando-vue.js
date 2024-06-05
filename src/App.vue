<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from "@/components/ConteudoPrincipal.vue";
import Rodape from "@/components/Rodape.vue";
export default {
    components: {Rodape, ConteudoPrincipal, Banner }
}
</script>

<template>
    <Banner />
    <ConteudoPrincipal />
    <rodape :texto="'Projeto fictício sem fins comerciais.'"/>
</template>

<style scoped>

</style>
