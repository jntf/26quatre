<template>
    <div class="relative md:min-h-screen -mt-12">
        <div class="w-full mx-auto">
            <slot></slot>
        </div>

        <div class="absolute top-20 left-5 md:w-1/3 h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
            <div class="text-3xl md:text-5xl font-bold animate-move pb-8" :style="`color:${currentService.firstPageColor.hex}`">
                {{ currentService.title }}
            </div>
            <h1 class="text-2xl md:text-4xl font-bold text-center text-white" data-aos="fade-right"
                data-aos-duration="1000">
                Révolutionner les Stratégies d'Entreprise avec des Techniques Avancées de Data et SEO.
            </h1>
            <a href="#"
                class="text-primary-200 mt-8 px-3 py-2 rounded-xl bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 hover:hover:from-primary-700 hover:to-primary-600 w-32 h-10 flex items-center justify-center animate-pulse"
                style="box-shadow: -3px -3px 3px -3px #B9C3A9, 2px 2px 5px 3px #000;">
                Contact us
            </a>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
    services: Object
}) 

const services = ref(props.services);

const currentService = ref(services.value.services[0]);
let serviceIndex = 0;

const changeService = () => {
    serviceIndex = (serviceIndex + 1) % services.value.services.length;
    currentService.value = services.value.services[serviceIndex];
};

onMounted(() => {
    setInterval(changeService, 2920);
});
</script>

<style>
@keyframes move {

    0%,
    15% {
        transform: translateY(100%);
        opacity: 0;
    }

    30%,
    90% {
        transform: translateY(0);
        opacity: 1;
    }

    90%,
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
}

.animate-move {
    animation: move 3s ease-in-out infinite;
}
</style>


