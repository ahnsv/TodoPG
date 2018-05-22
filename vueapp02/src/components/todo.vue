<template>
      <li v-for="(item, index) in items" v-model="input" :key="item.id"  class="list-item">
        {{item.todo}} {{index}}
        <button class="btn btn-primary" @click="removeItems(index)">
          delete
        </button>
      </li>
</template>
// TODO
// debug binding in SFC
<script>
export default {
  name: "home",
  data: function() {
    return {
      inputValue: "",
      items: [],
      storage: "todos"
    };
  },
  created: function() {
    this.items = localStorage.getItem(this.storage)
      ? JSON.parse(localStorage.getItem(this.storage))
      : [];
  },
  watch: {
    items: {
      handler: function(val) {
        localStorage.setItem(this.storage, JSON.stringify(this.items));
      },
      deep: true
    }
  },
  methods: {
    removeItems: function(i) {
      console.log("i is %o", i);
      // Do something
      this.items.splice(i, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
</style>
