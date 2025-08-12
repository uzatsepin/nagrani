<template>
    <div>
        <NuxtLoadingIndicator color="#D36F0D"/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        
        <!-- Global Contact Modal -->
        <OthersContactModal
            :is-open="contactsStore.contactPopup"
            @close="contactsStore.contactPopup = false"
        />
    </div>
</template>
<script setup lang="ts">
const contactsStore = useContactsStore();
const coursesStore = useCoursesStore();

// Load initial data
await Promise.all([
    contactsStore.fetchContacts(),
    coursesStore.fetchCourses()
]);
</script>