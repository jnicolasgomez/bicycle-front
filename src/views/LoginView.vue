<template>
    <div class="bicycle-list">
        <h1>Is initialized: {{Vue3GoogleOauth.isInit}}</h1>
        <h1>Is authorized: {{Vue3GoogleOauth.isAuthorized}}</h1>
    </div>
    <button @click='handleSignIn' :disabled='!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized'>
        Sign In
    </button>
    <button :disabled='!Vue3GoogleOauth.isAuthorized'>Sign out</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
    setup() {
        const Vue3GoogleOauth = inject('Vue3GoogleOauth');

        return {
            Vue3GoogleOauth
        };
    },
    methods: {
        async handleSignIn() {
            /*const googleUser = await this.$gAuth.signIn();
            if (!googleUser) {
                return null;
            }*/
        }
    }
})
</script>

<style scoped>
    .bicycle-list {
        max-width: 960px;
        margin: 40px auto;
    }
    .bicycle-list ul {
        padding: 0;
    }
    .bicycle-list li {
        list-style-type: none;
        background: white;
        padding: 16px;
        margin: 16px 0;
        border-radius: 4px;
    }
    .bicycle-list h2 {
        margin: 0 0 10px;
        text-transform: capitalize;
    }
    .color {
        display: flex;
    }
    .color p {
        font-weight: bold;
        margin: 10px 4px;
    }
</style>