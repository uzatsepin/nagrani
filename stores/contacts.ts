import type { Contacts } from "~/types/contacts.types";
import { useDirectus } from "~~/composables/useDirectus";

export const useContactsStore = defineStore("contacts", {
    state: () => ({
        contacts: {} as Contacts,
        error: null as string | null,
        isLoading: false,
        contactPopup: false as boolean
    }),
    actions: {
        async fetchContacts() {
            this.isLoading = true;
            try {
                const directus = useDirectus() as any;
                const { success, data, error } = await directus.getResponse({
                    url: "/items/contacts"
                });

                if (success) {
                    this.contacts = data.data as Contacts;
                } else {
                    console.error("Directus error:", error);
                    this.error = error;
                }
            } catch (e) {
                console.error("Unexpected error:", e);
                this.error = e as string;
            } finally {
                this.isLoading = false;
            }
        }
    }
});
