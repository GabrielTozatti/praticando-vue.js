<script lang="ts">
    export default {
        props: {
            texto: {type: String, required: true},
        }
    }
</script>

<template>
    <footer>
        <span>{{ texto }}</span>
    </footer>
</template>

<style scoped>

    footer {
        background-color: var(--verde-escuro);
        padding: 20px 0;
    }
    footer span {
        color: var(--creme);
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        display: block;
    }

</style>