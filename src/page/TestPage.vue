<template>
    <div class="my-component">
        {{test ? reverseMessage : 'hahahaha'}}
        <div>{{ reverseMessage }}</div>
        <div>{{test}}</div>
        <button @click="tesst()">Click</button>
        <div v-bind:class="[isActive ? activeClass : errorClass]">hahahah</div>
    </div>
</template>

<script>
    export default {
        name: 'TestPage',
        data() {
            return {
                message: 'this is text',
                test: true,
                toggle: false,
                isActive: true,
                errorClass: 'text-danger',
                activeClass: 'text-success',
            }
        },
        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('')
            }
        },
        methods: {
            tesst() {
                this.test = !this.test
                this.isActive = !this.isActive
                console.log(this.test)
            }
        },
    }
</script>

<style>
</style>