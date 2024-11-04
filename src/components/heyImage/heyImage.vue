<template>
  <el-image
    class="wz-image"
    :src="src"
    :fit="fit"
    :lazy="lazy"
  >
  </el-image>
</template>
<script>
export default {
  name: "wz-image",
  watch: {
    id(newVal) {
      if (!newVal) {
        this.imgUrl = "";
        this.uuid = v4();
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
