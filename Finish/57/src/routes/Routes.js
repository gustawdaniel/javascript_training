import Slideshow from "../components/Slideshow";

export default [
    { path: "/", redirect: "/slide/1" },
    { path: "/slide/:index", component: Slideshow }
];