import Slideshow from '../components/Slideshow.vue';

export default [
  { path: "/", redirect: "/slide/1"},
  { name: "default", path: "/slide/:index", component: Slideshow }
]
