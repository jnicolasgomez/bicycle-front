<template>
    <form @submit.prevent="handleSubmit">
        <label>Usuario</label>
        <input v-model="brand" type="text" required>
        <label>Contraseña</label>
        <input  v-model="color" type="password" required>
        <button> Ingresar </button>
        <GoogleLogin :callback="handleSignIn" prompt style="margin: 20px 5px 20px 5px"/>
        
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GoogleLogin, decodeCredential } from 'vue3-google-login';

export default defineComponent({
    setup() {
        const facebookAppId = process.env.VUE_APP_FACEBOOK_APP_ID;
        return {
            facebookAppId
        };
    },
    components: {
        GoogleLogin
    },
    methods: {
        async handleSignIn(response) {
            // decodeCredential will retrive the JWT payload from the credential
            const userData = decodeCredential(response.credential)
            console.log("Handle the userData", userData)
        }
    }
})
</script>

<style scoped>
    form {
        max-width: 250px;
        background: white;
        margin: 30px auto;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 3px 3px 7px rgba(0,0,0,0.4);
    }
    label {
        color: gray;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        widows: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid gray;
        color: black;
    }

    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        margin-right: 10px;
        color: white;
        border-radius: 20px;
        cursor:pointer;
        box-shadow: 3px 3px 7px rgba(0,0,0,0.4);
    }
    button:hover {
        background: #150183;
    }
    submit {
        text-align: center;
    }
</style>