<template>
  <div>
    <h3 @click="changeName">{{fullName}}</h3>
    <p>Watched Properties: Click on above name it will console VueJS</p>
    <p>
      A watcher is a special Vue.js feature that allows you to spy on one property of the component state,
      and run a function when that property value changes.
    </p>
    <h3>{{watchedProperty}}</h3>

    <h3 style="color:red">Custom Events</h3>

    <customevents @changeMsg="setMessage" :msg="welcomeMsg"></customevents>

  </div>
</template>

<script>
import customevents from "@/components/customevents";

export default {
  name: "computed",
  data() {
    return {
      title: "Computed Properties",
      firstName: "Akash",
      lastName: "Aher",
      watchedProperty: "",
      welcomeMsg: "Hello World"
    };
  },

  methods: {
    changeName: function() {
      this.lastName = "Vuejs";
    },
    setMessage(msg) {
      this.welcomeMsg = msg;
    }
  },

  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },

  watch: {
    lastName: function() {
      this.watchedProperty = this.lastName;
    }
  },

  components: {
    customevents
  }
};
</script>

<style>
</style>
