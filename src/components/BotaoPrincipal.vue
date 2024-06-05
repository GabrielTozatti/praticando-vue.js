<script lang="ts">
    export default {
        props: {
            texto: { type: String, required: true },
        }
    }
</script>

<template>
    <div class="botao">
        <button>
            <span>{{texto}}</span>
        </button>
    </div>
</template>

<style scoped>

    button {
        background-color: var(--coral);
        padding: 20px 100px;
        border-radius: 24px;
        cursor: pointer;
    }
    button span {
        color: var(--creme);
        font-weight: 700;
        font-size: 22px;
    }
    .botao {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>