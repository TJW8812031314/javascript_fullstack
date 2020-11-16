<template>
  <div id="app" class="text-gray-900 bg-gray-300 h-screen pt-8">
    <div class="max-w-sm mx-auto">
      <header class="pb-8">
        <router-link
          to="/"
          class="pb-1 mr-4"
          exact-active-class="border-b-2 border-gray-700"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="pb-1 mr-4"
          active-class="border-b-2 border-gray-700"
          >About</router-link
        >
          <router-link
          to="/parent"
          class="pb-1 mr-4"
          active-class="border-b-2 border-gray-700"
          >parent</router-link
        >
        <router-link
          to="/mixins"
          class="pb-1"
          active-class="border-b-2 border-gray-700"
          >mixin</router-link
        >
      </header>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
</style>
