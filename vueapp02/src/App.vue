<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input type="text" v-model="inputValue" inputPass="this.inputValue" autofocus placeholder="Add todo" @keyup.enter="addItems">
    <todo/>
  </div>
</template>

<script>
import todo from './components/todo'

export default {
  name: 'App',
  components: {
    todo
  },
  data: function() {
    return {
      inputValue: ''
    }
  },
  props: {
    inputPass: ''
  },
  methods: {
    addItems: function() {
      this.inputPass = this.inputValue;
      console.log('inputvalue is %o', this.inputValue); 
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
  margin-top: 60px;
}
</style>
