const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production", //'production',
  //devtool: 'source-map',
  externals: [
    "axios",
    "qs",
    "flv.js",
    "element-plus",
    "uuid",
    "echarts",
    "echarts-liquidfill",
    "echarts-gl",
    "lodash",
    "swiper",
    "swiper/dist/css/swiper.min.css",
    "video.js",
    "dayjs",
    "hey-ui/src/assets/imgs/default.jpg",
  ],
  entry: {
    "hey-image": path.resolve(__dirname, "./src/components/heyImage/"),
  },
  output: {
    path: path.resolve(__dirname, "./lib"),
  },
});
