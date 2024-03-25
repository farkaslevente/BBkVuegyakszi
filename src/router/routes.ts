import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProfilePage.vue") }],
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/RegisterPage.vue") }],
  },
  {
    path: "/myAds",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/MyAdsPage.vue") }],
  },
  {
    path: "/ads",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AdsPage.vue") }],
  },
  {
    path: "/adDetails",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AdDetailsPage.vue") }],
  },
  {
    path: "/search",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SearchPage.vue") }],
  },
  {
    path: "/contacts",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ContactsPage.vue") }],
  },
  {
    path: "/messageDetails",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/MessageDetailsPage.vue") }],
  },
  {
    path: "/forgottenPwd",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ForgottenPwdPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFoundPage.vue"),
  },
];

export default routes;
