<template>
  <div class="container">
    <div class="expence" v-for="expence in plan.expences" :key="expence.description">
      <p>Description: {{ expence.description }}</p>
      <p>Date: {{ plan.month }}-{{ expence.day }}</p>
      <p>Category: {{ expence.category }}</p>
      <p>Spent: {{ expence.spent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plan: {}
    };
  },
  methods: {
    getPlan() {
      this.$http.get("plans/" + this.$route.params.id).then(response => {
        this.plan = response.data;
      });
    }
  },
  mounted() {
    this.getPlan();
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
.expence {
  border: 3px solid #ffdb00;
  width: 300px;
  margin: 0 10px;
}
</style>