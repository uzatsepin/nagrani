<template>
    <div>
        <NuxtLoadingIndicator color="#D36F0D"/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
const contactsStore = useContactsStore();

await contactsStore.fetchContacts();
</script>