<template>
  <div id='content'>
    <form>
        <legend><h2>New Plan</h2></legend>
      <label>Select month: <input type="month" v-model='month'></label>
      <br>
      <label>Seed capital: <input type="number" v-model='money'></label>
      <button @click='addPlan'>Create</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            month: '',
            money: 0
        }
    },
    methods:{
        addPlan(){
            if(this.month == '' || this.money <= 0){
                alert('Некорректные данные');
                return;
            }
            var plan = {
                month: this.month,
                startMoney: this.money,
                currentMoney: this.money,
                expences: []
            };
            this.$http.post('plans', plan).then(response => {
                console.log(response);
            });
            this.$router.push('/list');
        }
    }
};
</script>

<style>
#content{
    display: flex;
    justify-content: center; 
}
</style>