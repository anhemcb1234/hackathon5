<template>
<div class="main-body">
       
    <NavBar></NavBar>
    <div class="flex items-center justify-center">
        <v-date-picker :attributes='attributes' class="w-full mx-16 mt-10" color="red" mode="date" tint-color='#f142f4' v-model="date" is-double-paned is-inline>
        </v-date-picker>
    </div>
    <div class="grid grid-cols-3 gap-4 m-3 p-5">
        <div v-for="(item, index) in reverseMessage" v-bind:key="index" class="col bg-yellow-500 drop-shadow-xl p-5 mt-20 rounded w-full  mb-3">
            <div class="card">
                <div class="card-body mt-2 h-60 min-h-fit">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style="width: 100px; margin-top: -65px" alt="User" class="img-fluid rounded-full img-thumbnail rounded-circle border-0" />
                    <h5 class="card-title">Fullname: {{item.fullname}}</h5>
                    <p class="text-secondary mb-1">Email: {{item.email}}</p>
                    <p class="text-secondary mb-1">Age: {{item.age}}</p>
                    <p class="text-muted font-size-sm">Adress: {{item.address}}</p>
                </div>
                <div class="card-footer flex justify-between mt-2">
                    <router-link :to="{ name: 'user', query: { id: item.id } }">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">
                            Detail
                        </button>
                    </router-link>
                    <button @click="handlerDel(item.id)" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <div class="col bg-yellow-500 drop-shadow-xl p-5 mt-20 rounded w-full mb-3">
            <div class="card">
                <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style="width:100px;margin-top:-65px" alt="User" class="img-fluid rounded-full img-thumbnail rounded-circle border-0 ">
                    <h5 class="card-title">John Doe</h5>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                </div>
                <div class="card-footer flex justify-between mt-2">
                    <router-link :to="{name:'user',query:{id:1}}">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">Detail</button>
                    </router-link>
                    <button @click="handlerDel()" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <div class="col bg-yellow-500 drop-shadow-xl p-5 mt-20 rounded w-full mb-3">
            <div class="card">
                <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style="width:100px;margin-top:-65px" alt="User" class="img-fluid rounded-full img-thumbnail rounded-circle border-0 ">
                    <h5 class="card-title">John Doe</h5>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                </div>
                <div class="card-footer flex justify-between mt-2">
                    <router-link :to="{name:'user',query:{id:1}}">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">Detail</button>
                    </router-link>
                    <button @click="handlerDel()" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import {
    homeService
} from "../service/homeService";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: 'HomePageAdmin',
    data() {
        const todos = [{
                description: 'Take Noah to basketball practice.',
                isComplete: false,
                dates: {
                    days: [1, 2, 3, 4],
                    month: [4]
                }, // Every Friday
                color: 'red',
            },
            {
                description: 'Hihi.',
                isComplete: true,
                dates: {
                    days: [5, 6, 7, 8]
                }, // Every Friday
                color: 'green',
            },
        ];
        return {
            date: new Date(),
            todos,
            idStaff: this.$route.query.id,
            show: false,
        }
    },
    components: {
        NavBar,
        Footer,
    },
    methods: {
        async getData() {
            const data = await homeService.getAllStaff();
            this.listStaff = data
            console.log(data);
        },
        async handlerDel(id) {
            try {
                const data = await homeService.delUserById(id);
                console.log(data);
                this.getData()
            } catch (e) {
                console.log(e);
            }
        },
        testing() {
            console.log(this.listStaff.data[0].id);
        }
    },
    mounted() {
        if (localStorage.getItem('token') === null) {
            alert("You are not logged in")
            this.$router.push('/')
            return
        }
        this.getData()
        this.show = true;
        setTimeout(() => {
            this.show = false;
        },3000)
    },
    computed: {
        attributes() {
            return [
                ...this.todos.map(todo => ({
                    dates: todo.dates,
                    dot: {
                        color: todo.color,
                        class: todo.isComplete ? 'opacity-75' : '',
                    },
                    popover: {
                        label: todo.description,
                    },
                    customData: todo,
                })),
            ];
        },
         reverseMessage() {
            return this.listStaff.data
        }
    },
};
</script>

<style></style>
