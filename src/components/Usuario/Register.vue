<template>
  <div>
    <button v-on:click="Prueba">Saludar</button>
    <div class="row">
      <div
        class="col-xl-4 col-md-6 col-sm-12"
        v-for="user in allUser.edges"
        :key="user.node.id"
      >
      <h1>{{user.node.name}}</h1>
      </div>
    </div> 
  </div> 
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    return {
      allUser: Object,
    };
  },
  methods: {
    Prueba() {
      console.log("Prueba");
      console.log("Datos ", this.allUser);
      console.log("Prueb2a");
    },
  },
  apollo: {
    allUser: {
      // Consulta
      query: require("@/graphql/User/user.gql"),
      // Asigna el error a la variable definida en data
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
};
</script>
