<template>

    <div id="app">

        <h1>Pokaz zdjęć</h1>

        <slideshow :images="images" />

    </div>

</template>

<script>

    import Slideshow from "./components/Slideshow";

    export default {
        name: "App",
        data() {
            return {
                images: [
                    {
                        "url": "http://code.eduweb.pl/kurs-vue/media/images/image-1.jpg"
                    },
                    {
                        "url": "http://code.eduweb.pl/kurs-vue/media/images/image-2.jpg"
                    },
                    {
                        "url": "http://code.eduweb.pl/kurs-vue/media/images/image-3.jpg"
                    }
                ]
            };
        },
        components: {
            Slideshow
        }
    };

</script>