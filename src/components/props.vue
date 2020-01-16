<template>
  <div>
    <h3>{{title}}</h3>
    <p>
    {{name}}<br>
    {{email}}<br>
    {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: "props",
  data() {
    return {
      title: "You're in props component"
    };
  },
  props: {
    name: {
      type: String,
      required: true,
      default: "Props Component"
    },
    email: {
      type: String
    },
    message: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>
