<template>
<div class="flex items-center justify-center mt-10">
    <div class="max-w-sm w-3/4  bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <img class="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">

        <div class="py-4 px-6">
            <div class="flex-col flex py-3">
                <label class="pb-2 text-gray-700 font-semibold">Full name</label>
                <input :value="dataStaff.fullname" @change="(e) => this.fullname = e.target.value" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Full name">
            </div>
            <div class="flex-col flex py-3">
                <label class="pb-2 text-gray-700 font-semibold">Email</label>
                <input :value="dataStaff.email" @change="(e) => this.email = e.target.value" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Full name">
            </div>
            <div class="flex-col flex py-3">
                <label class="pb-2 text-gray-700 font-semibold">Age</label>
                <input :value="dataStaff.age" @change="(e) => this.age = e.target.value" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Full name">
            </div>
            <div class="flex-col flex py-3">
                <label class="pb-2 text-gray-700 font-semibold">Address</label>
                <input :value="dataStaff.address" @change="(e) => this.address = e.target.value" type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Full name">
            </div>
            <div class="flex justify-between mt-2">
                <button @click="handlerUpdate()" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">
                    Update
                </button>
                <router-link to="/home">
                    <button @click="test()" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">
                        Home Page
                    </button>
                </router-link>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import {
    homeService
} from "../service/homeService";
export default {
    data() {
        return {
            dataStaff: [],
            fullname: '',
            email: '',
            age: '',
            address: '',
            idStaff: this.$route.query?.id,
        }
    },
    methods: {
        async getUser() {
            try {
                let data = await homeService.getStaffById(this.idStaff);
                this.dataStaff = data.data
            } catch (e) {
                console.log(e)
            }
        },
        test() {
            console.log(this.idStaff)
            console.log(this.dataStaff.address)
        },
        async handlerUpdate() {
            try {
                let reps = await homeService.updateStaffById({
                    id: this.idStaff,
                    fullname: this.fullname.length === 0 ? this.dataStaff.fullname : this.fullname,
                    email: this.email.length === 0 ? this.dataStaff.email : this.email,
                    age: this.age.length === 0 ? this.dataStaff.age : this.age,
                    address: this.address === 0 ? this.dataStaff.address : this.address,
                    userDTO: {
                        id: this.idStaff,
                        username: this.fullname.length === 0 ? this.dataStaff.fullname : this.fullname,
                        password: this.fullname.length === 0 ? this.dataStaff.fullname : this.fullname,
                        email: this.email.length === 0 ? this.dataStaff.email : this.email,
                    }
                })
                console.log(reps)
                this.$router.push('/home')
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
        this.getUser();
    }
}
</script>

<style>

</style>
