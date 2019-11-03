<template>
  <div id="app">
    <img src="./assets/my-logo.png">
    <h1>Plan Your Expences!</h1>
    <h2>Don't Be a Spender</h2>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Plan Your Expences'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button{
    background: #FFDB00;
    padding: 20px 40px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    border: 1px solid black;
    font-weight: normal;
    color: #2c3e50;
    border-radius: 2%;
}

form{
  border: 3px solid #FFDB00;
  width: 30%;
  align-self: center;
  font-size: 18px;
}

form label{
  display: block;
}

form button{
  margin: 15px;
}
</style>
