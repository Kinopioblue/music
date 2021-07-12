<template>
  <div>
    <audio :src="this.$store.state.music.mp3Url" controls autoplay></audio>
  </div>
</template>

<script>
export default {
  name:'MusicPlayer',
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
audio {
  position: fixed;
  left:50%;
  bottom: 50px;
  transform:translateX(-50%);
}
</style>