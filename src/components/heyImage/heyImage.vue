<template>
  <el-image
    class="hey-image"
    :src="src"
    :fit="fit"
    :lazy="lazy"
  >
  </el-image>
</template>
<script>
export default {
  name: "hey-image",
  watch: {
    id(newVal) {
      if (!newVal) {
        this.imgUrl = "";
      } 
    }
  },
  computed: {
    src() {
      return this.imgUrl || this.url;
    },
    lazy() {
      return this.src ? true : false;
    }
  },
  props: {
    id: {
      type: [Number, String]
    },
    url: String,
    fit: {
      type: String,
      default: "contain"
    },
    needDefaultImage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      imgUrl: "",
      previewSrcList: []
    };
  },
  methods: {
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
.default-img {
  display: block;
  margin: auto;
}

.image-slot,
.default-img {
  width: inherit;
  height: inherit;
}
</style>
