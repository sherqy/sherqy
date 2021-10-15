<template lang="html">
<div>
    <h2>This is a sub page.</h2>
    <button @click="fnMainPage">Go to main page (using router function)</button>
</div>
</template>
<script>
export default {
    methods: {
        fnMainPage() {
            this.$router.push('/main')
        }
    }
}
</script>