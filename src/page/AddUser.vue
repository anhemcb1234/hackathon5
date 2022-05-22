<template>
<!-- component -->
<div class="md:p-12 bg-indigo-100 flex flex-row flex-wrap">
    <form class="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg" @submit.prevent="handlerSubmit()">

        <div class="text-2xl text-indigo-900 text-center">Add user</div>

        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">Full name</label>
            <input v-model="fullname" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Full name">
        </div>
        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">User Name</label>
            <input v-model="username" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="User Name">
        </div>

        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">User Email</label>
            <input v-model="email" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="John@mail.com">
        </div>
        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">Age</label>
            <input v-model="age" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Age">
        </div>
        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">Address</label>
            <input v-model="address" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Address">
        </div>
        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">Password</label>
            <input v-model="password" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Password">
        </div>
        <div class="mt-2">
            <button class="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300">Add</button>
            <router-link to="/home">
                <button class="p-3 mt-2 bg-indigo-400 text-white w-full hover:bg-indigo-300">Home page</button>
            </router-link>
        </div>
    </form>
</div>
</template>

<script>
import {
    homeService
} from '../service/homeService'
export default {
    data() {
        return {
            fullname: '',
            email: '',
            password: '',
            age: '',
            address: '',
            username: '',
        }
    },
    methods: {
        async handlerSubmit() {
            try {
                await homeService.getAddStaff({
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password,
                    age: this.age,
                    address: this.address,
                    userDTO: {
                        username: this.username,
                        password: this.password,
                        email: this.email,
                    }
                })
                this.fullname = ''
                this.username = ''
                this.email = ''
                this.password = ''
                this.age = ''
                this.address = ''
            } catch (e) {
                console.log(3)
            }

        }
    },
}
</script>

<style>

</style>
