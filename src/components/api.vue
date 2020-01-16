<template>
  <div>
    <p>{{title}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "api",
  data() {
    return {
      title: "Api Call",
      response: null,
      name: ""
    };
  },
  methods: {},
  created() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.name = response.data;
    });
  }
};
</script>

<style>
</style>
