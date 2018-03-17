<template>

    <div id="app">

        <h1>Pokaz zdjęć</h1>

      <router-vue :images="images"></router-vue>

    </div>

</template>

<script>

    import axios from "axios";
    import Slideshow from "./components/Slideshow";

    export default {
        name: "App",
        props: {
            endpoint: String
        },
        data() {
            return {
                images: []
            };
        },
        components: {
            Slideshow
        },
        created() {
            axios.get(this.endpoint)
                .then(res => this.images = res.data);
        }
    };

</script>
