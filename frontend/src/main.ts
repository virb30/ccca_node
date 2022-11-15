import { createApp } from "vue";
import App from "./App.vue";
import ServiceFactoryHttp from "./infra/factory/ServiceFactoryHttp";
import ServiceFactoryMemory from "./infra/factory/ServiceFactoryMemory";
import AxiosAdapter from "./infra/http/AxiosAdapter";
import Router from "./infra/router/Router";

const httpClient = new AxiosAdapter();
const serviceFactory = new ServiceFactoryHttp(httpClient, "http://localhost:3000");
// const serviceFactory = new ServiceFactoryMemory();

const app = createApp(App);
app.use(Router.build());
app.provide("serviceFactory", serviceFactory);
app.mount("#app");
