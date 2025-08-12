<template>
    <Header />
    <Hero />
    <About />
    <Directions />
    <Target />
    <Mission />
    <Founder />
    <Courses />
    <Footer />


    <Transition name="popup-anim">
        <OthersContactModal
            :is-open="contactsStore.contactPopup"
            @close="contactsStore.contactPopup = false"
        />
    </Transition>
    
</template>

<script setup lang="ts">
const contactsStore = useContactsStore();
</script>

<style scoped>
.popup-anim-enter-active {
    transition: all 250ms ease-in-out;
}
.popup-anim-leave-active {
    transition: all 250ms ease-in-out;
}
.popup-anim-enter, .popup-anim-leave-to {
    opacity: 0;
}
</style>