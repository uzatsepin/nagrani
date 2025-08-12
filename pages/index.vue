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
const coursesStore = useCoursesStore();

// SEO and Structured Data
useHead({
    title: 'Курси виживання, тактична медицина та самозахист - NaGrani',
    meta: [
        { name: 'description', content: 'Школа виживання NaGrani - комплексні курси з виживання в екстремальних умовах, тактичної медицини, самозахисту та безпеки. Практичні навички та реальні кейси від професійних інструкторів.' },
        { name: 'keywords', content: 'курси виживання, тактична медицина, самозахист, школа виживання, безпека, екстремальні умови, NaGrani, Віталій Олійник' },
        { property: 'og:title', content: 'Курси виживання, тактична медицина та самозахист - NaGrani' },
        { property: 'og:description', content: 'Навчальні курси, які допоможуть вижити в будь-яких ситуаціях - від екстремальних природних умов до надзвичайних ситуацій у місті.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nagrani.life' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Курси виживання, тактична медицина та самозахист - NaGrani' },
        { name: 'twitter:description', content: 'Навчальні курси, які допоможуть вижити в будь-яких ситуаціях' },
        { name: 'robots', content: 'index, follow' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "NaGrani",
                "alternateName": "Школа виживання NaGrani",
                "url": "https://nagrani.life",
                "logo": "https://nagrani.life/images/logo.svg",
                "description": "Школа виживання NaGrani - комплексні курси з виживання в екстремальних умовах, тактичної медицини, самозахисту та безпеки.",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "UA",
                    "addressLocality": "Україна"
                },
                "sameAs": [
                    "https://www.instagram.com/nagrani.life",
                    "https://t.me/nagrani_life"
                ],
                "founder": {
                    "@type": "Person",
                    "name": "Віталій Олійник"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "UAH",
                    "lowPrice": "2000",
                    "highPrice": "15000"
                }
            })
        }
    ]
})
</script>

<style scoped>
.popup-anim-enter-active {
    transition: all 350ms ease-in-out;
}
.popup-anim-leave-active {
    transition: all 350ms ease-in-out;
}
.popup-anim-enter, .popup-anim-leave-to {
    opacity: 0;
}
</style>