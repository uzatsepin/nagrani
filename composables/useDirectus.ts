// composables/useDirectus.ts
export function useDirectus() {
    const config = useRuntimeConfig()

    // Функция для совместимости со старым кодом
    const getResponse = async ({ url, params = {} }: { url: string; params?: Record<string, any> }) => {
        const { data, error } = await useFetch(url, {
            baseURL: config.public.directusUrl,
            params,
            headers: { 'Content-Type': 'application/json' },
        })

        if (error.value) {
            console.error('Directus API error:', error.value)
            return { success: false, error: error.value, data: null }
        }

        return { success: true, data: data.value, status: 200 }
    }

    // Функция для совместимости со старым кодом
    const postResponse = async ({ url, data: body = {} }: { url: string; data?: Record<string, any> }) => {
        try {
            const data = await $fetch(url, {
                method: 'POST',
                body,
                baseURL: config.public.directusUrl,
                headers: {
                    'Content-Type': 'application/json',
                },
                // Важно для обработки ошибок
                onResponseError: (error) => {
                    console.error('Directus API error when posting:', error);
                }
            });
            
            return { success: true, data, status: 200 };
        } catch (error) {
            console.error('Directus API error:', error);
            return { success: false, error, data: null };
        }
    };

    return {
        getResponse,
        postResponse,
    }
}
