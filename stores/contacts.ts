import type { Contacts } from "~/types/contacts.types";

export const useContactsStore = defineStore("contacts", {
    state: () => ({
        contacts: {} as Contacts,
        error: null as string | null,
        isLoading: false,
        contactPopup: false as boolean
    }),
    actions: { }
});
