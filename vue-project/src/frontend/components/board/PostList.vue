<template>
    <div class="post-list">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @vote="handleVote"
      />
    </div>
  </template>
  
  <script>
  import PostItem from './PostItem.vue';
  
  export default {
    name: 'PostList',
    components: { PostItem },
    data() {
      return {
        posts: [
          { id: 1, title: 'First Post', content: 'This is the first post.', votes: 10 },
          { id: 2, title: 'Second Post', content: 'This is the second post.', votes: 5 },
        ],
      };
    },
    methods: {
      handleVote(postId, voteChange) {
        const post = this.posts.find((p) => p.id === postId);
        if (post) post.votes += voteChange;
      },
    },
  };
  </script>
  
  <style scoped>
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>
  