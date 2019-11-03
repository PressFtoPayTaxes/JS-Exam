<template>
  <div>
    <div class="container">
      <div class="currentPlan">
        <p>Month: {{ plan.month }}</p>
        <p>Seed Capital: {{ plan.startMoney }}</p>
        <p>Current Capital: {{ plan.currentMoney }}</p>
      </div>
    </div>
    <div class="container">
      <form action>
        <legend>
          <h2>Add Expence</h2>
        </legend>
        <label>Description: <input type="text" v-model='expence.description'></label>
        <br>
        <label>Category: <select v-model='expence.category'>
                            <option value="bills">Bills</option>
                            <option value="food">Food</option>
                            <option value="drinks">Drinks</option>
                            <option value="clothes">Clothes</option>
                            <option value="credits">Credits</option>
                            <option value="restaurants">Restaurants</option>
                            <option value="clubs">Clubs</option>
                            <option value="cinema">Cinema</option>
                            <option value="furniture">Furniture</option>
                            <option value="gadgets">Gadgets</option>
                            <option value="other">Other</option>
                         </select></label>
        <br>
        <label>Day: <input type="number" v-model='expence.day'></label>
        <br>
        <label>Spent: <input type="number" v-model='expence.spent'></label>
        <br>
        <button @click='addExpence'>Add</button>
      </form>
    </div>
    <router-link tag='button' :to='{ name: "report", params: { id: plan.id } }'>Make Report</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plan: {},
      expence: {
          description: '',
          category: '',
          day: 0,
          spent: 0
      }
    };
  },
  methods: {
    getPlan() {
      this.$http.get("plans/" + this.$route.params.id).then(response => {
          this.plan = response.data;
      });
    },
    addExpence(){
        var expences = this.plan.expences;
        expences.push(this.expence);
 
        this.$http.put('plans/' + this.$route.params.id, {
            month: this.plan.month,
            startMoney: this.plan.startMoney,
            currentMoney: this.plan.currentMoney - expencse.spent, 
            expences: expences
        } );

        

        this.$router.push('/plan/' + this.$route.params.id);
    }
  },
  mounted() {
    this.getPlan();
  }
};
</script>

<style>
.currentPlan {
  border: 3px solid #ffdb00;
  width: 300px;
  margin: 0 10px;
}
.container {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>