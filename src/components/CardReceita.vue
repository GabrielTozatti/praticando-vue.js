<script lang="ts">
    import type {PropType} from "vue";
    import type IReceitas from "@/interfaces/IReceitas";

    export default {
        props: {
            receita: {type: Object as PropType<IReceitas>, required: true},
        }

    }
</script>

<template>
    <article class="receita">
        <header>
            <img :src="`public/imagens/receitas/${receita.imagem}`" alt="">
        </header>
        <h1 class="titulo">{{receita.nome}}</h1>
    </article>
</template>

<style scoped>

.receita {
    width: 19.5rem;
    padding: 0 0 20px 0;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 20px;
}
header {
    width: 100%;
}
header img {
    width: 100%;
    display: block;
    border-radius: 1rem 1rem 0px 0px
}
.titulo {}

</style>