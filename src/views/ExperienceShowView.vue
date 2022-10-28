<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>
<script>
import sourceData from '@/data.json'
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        experienceSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination(){
            return sourceData.destintations.find(
                destination => destination.id === this.id
            )
        },
        experience() {
            return this.destination.experiences.find(
                experience => experience.slug === this.experienceSlug
            )
        },         
    }
    // data() {
    //     return {
    //         experience: {
    //             type: Object,
    //             required: true
    //         }
    //     }
    // }
}
</script>