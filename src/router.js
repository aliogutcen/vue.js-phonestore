import { createRouter, createWebHistory } from "vue-router";

import AddPhone from "@/views/AddPhone.vue";
import PhoneList from "@/views/PhoneList.vue";
import JsonList from "@/views/JsonList.vue";
import SinglePhone from "@/views/SinglePhone.vue";
const routes = [
  {
    path: "/",
    name: "AddPhone",
    component: AddPhone,
  },
  {
    path: "/list-phone",
    name: "PhoneList",
    component: PhoneList,
  },
  {
    path: "/json-list",
    name: "JsonList",
    component: JsonList,
  },
  {
    path: `/phone/:serial`,
    name: "SinglePhone",
    component: SinglePhone,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
