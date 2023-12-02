<template>
    <div class="relative md:min-h-screen -mt-12">
        <div class="w-full mx-auto">
            <!-- <img src="../assets/banner3.png" alt="banner" class="w-full h-[60vh] md:h-[90vh] object-cover"> -->
            <img :src="banner.src" alt="banner" class="w-full h-[60vh] md:h-[90vh] object-cover">
        </div>

        <div class="absolute top-20 left-5 md:w-1/3 h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
            <div :class="`${currentWord.color} text-3xl md:text-5xl font-bold animate-move pb-8`">
                {{ currentWord.text }}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-center text-white" data-aos="fade-right" data-aos-duration="1000">
                Tout ce que vous devez savoir sur la Data Science
            </h2>
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
    banner: Object,
})

interface WordEntry {
    text: string;
    color: string;
}

const words: WordEntry[] = [
    { text: 'Data Engineer', color: 'text-complementary-200' },
    { text: 'Data Analyst', color: 'text-como-400' },
    { text: 'SEO', color: 'text-yellow-700' },
    { text: 'Web Optimisation', color: 'text-green-700' },
];

const currentWord = ref(words[0]);
let wordIndex = 0;

const changeWord = () => {
    wordIndex = (wordIndex + 1) % words.length;
    currentWord.value = words[wordIndex];
};

onMounted(() => {
    setInterval(changeWord, 2920);
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


