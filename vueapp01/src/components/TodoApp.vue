<template>
    <div class="container">
        <ul class="list-group">
            <li class="list-group-item" :todos="todos" v-for="todo in todos"> {{todo.title}} </li>
        </ul> 
    </div>
</template>
<script>
export default {
  props: ['todos']
}
</script>
<style scoped>

</style>

