<template lang="html">
<div>
<h2> This is the main page.</h2>
<button @click="fnSubPage">Go to a subpage (using a router function)</button>
</div>
</template>
<script>
    export default {
        methods: {
            fnSubPage() {
                this.$router.push('/sub')
            }
        }
    }
</script>