<template>
    <div class='plansContainer'>
        <div v-if='!plans.length'>
            <p>You have no plans:0</p>
            <router-link tag='button' to='/new'>Create</router-link>
        </div>
        <div class='plan' v-else v-for='plan in plans' :key='plan.id' @click='route(plan.id)'>
            <p>Month: {{ plan.month }}</p>
            <p>Seed Capital: {{ plan.startMoney }}</p>
            <p>Current Capital: {{ plan.currentMoney }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            plans: []
        }
    },
    methods: {
        getPlans(){
            this.$http.get('plans').then(response => {
                this.plans = response.data;
            });
        },
        route(id){
            this.$router.push({ name: 'plan', params: { id: id } });
        }
    },
    mounted(){
        this.getPlans();
    }
}
</script>

<style>
    .plansContainer{
        display: flex;
        justify-content: center;
    }
    .plan{
        border: 3px solid #FFDB00;
        width: 300px;
        margin: 0 10px
    }
    .plan:hover{
        background: #f0e6e6;
        border: 3px solid #c9b216;
        cursor: pointer;
    }
</style>