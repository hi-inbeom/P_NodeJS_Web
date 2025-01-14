<template>
    <div class="post-item">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <div class="actions">
        <button @click="$emit('vote', post.id, 1)">Upvote</button>
        <button @click="$emit('vote', post.id, -1)">Downvote</button>
        <span>Votes: {{ post.votes }}</span>
        <button>Share</button>
        {{ post }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostItem',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .post-item {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }
  .actions {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  </style>
  