<template>
    <header :class="{ 'bg-white text-primary-800 shadow-xl': scrolled, 'text-primary-200': !scrolled }">
        <nav class="flex justify-between items-center p-4 lg:px-6 sticky top-0 z-50 max-w-screen-xl mx-auto">
            <!-- Logo -->
            <a href="/" class="flex items-center">
                <img :class="{ 'invert': scrolled }" :src="logo.src" alt="<26·quatre />" width="150" height="150" loading="lazy">
            </a>

            <!-- Bouton menu mobile -->
            <button @click="toggleMenu" class="lg:hidden" aria-label="Open menu">
                <svg :class="{ 'text-gray-800': scrolled, 'text-gray-100': !scrolled }" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

             <!-- Liens de navigation -->
             <div :class="{ 'hidden': !isMenuOpen, 'flex': isMenuOpen, 'fixed inset-0 bg-white z-50': isMenuOpen }" class="lg:flex items-center space-x-6">
                <a href="#" class="hover:text-yellow-400">Accueil</a>
                <div @mouseover="openDropdown" @mouseleave="closeDropdown" class="relative">
                    <a href="#services" class="hover:text-yellow-400">Services</a>
                    <div v-if="isDropdownOpen" class="absolute bg-white shadow-md -ml-16">
                        <a v-for="item in titlesSlug" :href="`/services/${item.slug}`" class="block px-4 text-sm py-2 hover:bg-gray-100">{{ item.title }}</a>
                    </div>
                </div>
                <!-- Autres liens ici -->
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    logo: Object,
    titlesSlug: Array,
})

const scrolled = ref(false);
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const openDropdown = () => {
    isDropdownOpen.value = true;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const checkScroll = () => {
    scrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<style>
.custom-shadow {
    box-shadow: -10px -10px 5px #fff, 10px 10px 5px #000;
}

header {
    position: sticky;
    top: 0;
    z-index: 50;
    /* Pour s'assurer qu'il reste au-dessus des autres éléments */
}
</style>

