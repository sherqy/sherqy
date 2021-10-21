<template>
    <v-container>
        <v-content>
            <div class="text-center display-3 my-4">This is Main Page.</div>
            <v-row>
                <v-col offset-sm="1" sm="10">
                    <v-text-field label="Title" v-model="sTitle">
                    </v-text-field>
                </v-col>
            </v-row>
            <div class="text-center">
                <v-btn large class="mt-5" color="purple" dark @click="fnSetTitle">
                    O   K
                </v-btn>
            </div>
        </v-content>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                sTitle: this.$store.getters.fnGetData
            }
        },
        methods: {
            fnSetTitle() {
                this.$store.commit('fnSetData', this.sTitle);
                this.$router.push('/sub');
            }
        }
    }
</script>