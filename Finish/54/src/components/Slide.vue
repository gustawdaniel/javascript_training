<template>

    <figure class="figure">
        <img :src="url" alt="" class="img-responsive">
        <figcaption class="text-center text-gray mt-2">{{ number }}</figcaption>
    </figure>

</template>

<script>

    export default {
        name: "Slide",
        props: {
            url: String,
            number: String
        }
    };

</script>