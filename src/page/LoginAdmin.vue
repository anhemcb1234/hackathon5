<template>
<div>
    <div v-if="show" class="w-full fixed" role="alert ">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
        </div>
        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Something not ideal might be happening.</p>
        </div>
    </div>
    
    <div class="py-6 h-screen flex items-center justify-center">
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
            <div class="w-80 p-8">
                <h2 class="text-2xl font-semibold text-gray-700 text-center">Hackathon</h2>
                <p class="text-xl text-gray-600 text-center">Welcome back Admin!</p>

                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">User Name</label>
                    <input v-model="name" placeholder=" Enter user name" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text">
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    </div>
                    <input v-model="password" placeholder="Enter your password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                </div>
                <div class="mt-8">
                    <button @click="handlerSubmit()" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    loginService
} from '../service/loginService';
export default {
    data() {
        return {
            name: '',
            password: '',
            show: false
        }
    },
    methods: {
        async handlerSubmit() {
            console.log(1)
            try {
                const response = await loginService.getSignIn({
                    username: this.name,
                    password: this.password
                })
                console.log(response.data)
                localStorage.setItem('token', response.data.token);
                this.$router.push(`/home?id=${response.data.id}`)
            } catch (error) {
                this.show = true
                setTimeout(() => {
                    this.show = false
                }, 3000)
                console.log(error.message);
            }
        }
    }
}
</script>

<style>

</style>
