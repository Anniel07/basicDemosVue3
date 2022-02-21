// using routes

import { createWebHistory, createRouter } from "vue-router";

import FiltringDemo from "@/views/FiltringDemo.vue";
import HelloWorld from "@/views/HelloWorld.vue";
import PaintDemo from "@/views/PaintDemo.vue";
import SortingDemo from "@/views/SortingDemo.vue";
import StorieWithVotesIndex from "@/views/StorieWithVotesIndex.vue";
import UsingComponents from "@/views/UsingComponents.vue";

const routes = [
   
    {
        path: "/",
        name: "Hello World",
        component: HelloWorld,
    },
    {
        path: "/filtring-demo",
        name: "FiltringDemo",
        component: FiltringDemo,
    },

    {
        path: "/paint-demo",
        name: "PaintDemo",
        component: PaintDemo,
    },
    {
        path: "/sorting-demo",
        name: "SortingDemo",
        component: SortingDemo,
    },

    {
        path: "/storie-with-votes",
        name: "Stories With Votes",
        component: StorieWithVotesIndex,
    },
    
    {
        path: "/using-components",
        name: "UsingComponents",
        component: UsingComponents,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
