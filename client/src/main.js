import { createApp, createVNode, render } from "vue";
import "./style.scss";
import App from "./App.vue";

// createApp(App).mount("#app");

const mount = (element) => {
  console.log(element);
  const vNode = createVNode(App);

  render(vNode, element);

  const destroy = () => {
    render(null, element);
  };

  return { vNode, destroy, element };
};

if (import.meta.env.DEV) {
  mount(document.querySelector("#app"));
}

export default mount;
