import heyImage from "./components/heyImage/heyImage.vue";

const components = [
  heyImage,
];

const install = (Vue) =>
  components.forEach((component) => Vue.component(component.name, component));

export {
  install,
  heyImage,
};
