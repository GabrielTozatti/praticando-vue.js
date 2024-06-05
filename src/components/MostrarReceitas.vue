<script lang="ts">
    import {obterReceitas} from "@/http";
    import type {PropType} from "vue";
    import BotaoPrincipal from './BotaoPrincipal.vue';
    import type IReceitas from "@/interfaces/IReceitas";
    import CardReceita from "@/components/CardReceita.vue";
    import {itensDeLista1EstaoEmLista2} from '@/operacoes/lista'

    export default {
        components: {BotaoPrincipal, CardReceita},
        data(){
            return {
                receitasEncontradas: [] as IReceitas[],
            }
        },
        props: {
          ingredientes: {type: Array as PropType<string[]>, required: true},
        },
        async created() {
            const receitas = await obterReceitas();
            this.receitasEncontradas = receitas.filter((receita) =>{
                const possoFazerReceita = itensDeLista1EstaoEmLista2(receita.ingredientes, this.ingredientes);
                return possoFazerReceita;
            });
        },
        methods: {

        },
        emits: ['editarLista']
    }
</script>

<template>
     <section class="mostrar-receitas">
         <h1 class="cabecalho titulo-receitas">Receitas</h1>
         <p class="contador">Resultados encontrados: <span>{{receitasEncontradas.length}}</span></p>
         <p v-if="receitasEncontradas.length != 0" class="subtitulo">Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
         <p v-else class="subtitulo">Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?</p>
         <ul v-if="receitasEncontradas.length != 0" class="receitas">
             <li v-for="receita in receitasEncontradas" :key="receita.nome">
                 <CardReceita :receita="receita" />
             </li>
         </ul>
         <div class="nao-econtrado" v-else>
             <img src="../assets/images/sem-receitas.png" alt="">
         </div>
         <BotaoPrincipal texto="Editar lista" @click="$emit('editarLista', $event)" />
     </section>
</template>

<style scoped>

.titulo-receitas {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
    text-align: center;
}
.contador {
    font-size: 22px;
    color: var(--verde-medio);
    text-align: center;
}
.subtitulo {
    color: var(--cinza);
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
}
.receitas {
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}
.nao-econtrado {
    text-align: center;
}
.nao-econtrado img {
    margin: 50px 0;
}

</style>