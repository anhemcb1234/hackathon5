<template>
  <div>
    <div>Home Page</div>
    <label for="1">Test1</label>
    <input v-model="list" type="checkbox" value="1" id="1" />
    <label for="2">Test2</label>
    <input v-model="list" type="checkbox" value="2" id="2" />
    <label for="3">Test3</label>
    <input v-model="list" type="checkbox" value="3" id="3" />
    <button @click="test()">Click</button>
          <router-link to="/testpase">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    test() {
      console.log(this.list);
    },
  },
  mounted() {
    console.log("HomePage mounted");
  },
};
</script>

<style scoped></style>
