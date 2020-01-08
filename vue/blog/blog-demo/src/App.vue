<template>
  <div id="app">
    <h1>looke me</h1>
    <button @click="showHide">show/hide highlighted post</button>
    <BlogPost v-for="blogPost in visibileBlogPosts" :post="blogPost" :key="blogPost.item"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
 import BlogPost, { Post } from "./components/BlogPost.vue";
 import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      BlogPost
    }
  })
  export default class App extends Vue {
    private blogPost: Post[] = [
      {
        title: 'My first blogpost ever!',
        body: 'welcome to my blog',
        author: 'df',
        datePosted: new Date(2020, 0, 7)
      },
      {
        title: 'My second blogpost ever!',
        body: 'welcome to my blog',
        author: 'df',
        datePosted: new Date(2020, 0, 8),
        highlighted: true
      },
      {
        title: 'My third blogpost ever!',
        body: 'welcome to my blog',
        author: 'df',
        datePosted: new Date(2020, 0, 9)
      }
    ]

    public showHighlighted: boolean = true

    get visibileBlogPosts() {
      return this.blogPost.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showHighlighted)
    }

    public showHide () {
      this.showHighlighted = !this.visibileBlogPosts
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
