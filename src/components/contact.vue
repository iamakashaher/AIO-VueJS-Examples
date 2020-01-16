<template>
  <div class="contact">
    <!-- <h1>{{title}}</h1> -->

    <div class="contact">
      <form @submit.prevent="getFormValues">
        <div class="form-group">
          <div class="input-group-prepend">
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Full Name"
              v-model="name"
            />
          </div>

          <div class="input-group-prepend">
            <input
              type="text"
              class="form-control"
              name="email"
              placeholder="Email Address"
              v-model="email"
            />
          </div>

          <div class="input-group-prepend">
            <textarea
              class="form-control"
              name="message"
              placeholder="Enter Your Message"
              v-model="message"
            ></textarea>
          </div>
          <button class="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
      <h4>2-way binding</h4>
      <p>
        {{name}}
        <br />
        {{email}}
        <br />
        {{message}}
      </p>
    </div>
    <props :name="name" :email="email" :message="message"></props>
  </div>
</template>
<script>
import props from "@/components/props";
export default {
  name: "blog",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    getFormValues: function(submitEvent) {
      this.name = submitEvent.target.elements.username.value;
      this.email = submitEvent.target.elements.email.value;
      this.message = submitEvent.target.elements.message.value;

      this.body = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      alert(JSON.stringify(this.body));
    }
  },
  components: {
    props
  }
};
</script>

<style scoped>
.contact form {
  max-width: 40em;
  margin: 2em auto;
}
.contact form .form-control {
  margin-bottom: 1em;
}
.contact form textarea {
  min-height: 20em;
}
</style>
