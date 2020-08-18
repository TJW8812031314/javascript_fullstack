<template>
  <div class="max-w-sm px-4 py-6 mx-auto bg-white rounded shadow-lg">
    <div class="flex items-center justify-between px-3">
      <h1 class="text-2xl font-bold">Todos</h1>

      <div class="text-blue-500">
        <svg v-if="isSaving" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z"
          />
        </svg>
      </div>
    </div>

    <div class="mt-6">
      <p class="px-3 text-gray-500" v-if="isLoading">Loading...</p>

      <div v-else>
        <div class="px-3">
          <form @submit.prevent="createTodo">
            <input
              type="text"
              v-model="newTodo.text"
              placeholder="New todo"
              class="block w-full px-3 py-2 placeholder-gray-500 bg-white rounded shadow focus:outline-none"
            />
          </form>
        </div>

        <ul class="mt-8">
          <todo v-for="todo in todos" :key="todo.id" :todo="todo" @change="saveTodo" class="my-1" />
        </ul>

        <div class="flex justify-between px-3 mt-12 text-sm font-medium text-gray-500">
          <p v-if="todos.length">{{ done }} / {{ total }} complete</p>
          <button
            @click="deleteCompleted"
            v-if="done"
            class="font-medium text-blue-500 focus:outline-none focus:text-blue-300"
          >Clear completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./todo";
export default {
  data() {
    return {
      isSaving: false,
      isLoading: false,
      newTodo: {text: ''},
      todos: [],
      pendingOps: [],
    };
  },
  components: { todo: Todo },
  computed: {
    total() {
      return this.todos.length;
    },
    done() {
      return this.todos.length > 0;
    },
  },
  methods: {
    createTodo() {
      this.todos.push(this.newTodo.text);
    },
    saveTodo() {},
    deleteCompleted() {},
  },

  beforeCreate: function () {
    console.log("1-beforeCreate 初始化之后");
  },
  created: function () {
    console.log("2-created 创建完成");
  },
  beforeMount: function () {
    console.log("3-beforeMount 挂载之前");
  },
  mounted: function () {
    console.log("4-mounted 被创建");
  },
  beforeUpdate: function () {
    console.log("5-beforeUpdate 数据更新前");
  },
  updated: function () {
    console.log("6-updated 被更新后");
  },
  // keep-alive是生命周期吗？什么时候执行 // 不是。会增加两个生命周期
  activated: function () {
    console.log("7-activated");
  },
  deactivated: function () {
    console.log("8-deactivated");
  },

  beforeDestroy: function () {
    console.log("9-beforeDestroy 销毁之前");
  },
  destroyed: function () {
    console.log("10-destroyed 销毁之后");
  },
};
</script>

<style>
</style>
