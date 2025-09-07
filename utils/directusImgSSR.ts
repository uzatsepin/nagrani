// utils/directusImgSSR.ts
export function getDirectusImageUrlSSR(imageId: string, options: {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'inside' | 'outside';
    quality?: number;
} = {}): string {
    // Используем переменную окружения напрямую для SSR безопасности
    const directusUrl = process.env.NUXT_DIRECTUS_API_BASE || 'https://nagrani.life'
    
    // Базовый URL для получения ассетов
    let url = `${directusUrl}/assets/${imageId}`
    
    // Добавляем параметры трансформации, если они переданы
    const params = new URLSearchParams()
    
    if (options.width) params.append('width', options.width.toString())
    if (options.height) params.append('height', options.height.toString())
    if (options.fit) params.append('fit', options.fit)
    if (options.quality) params.append('quality', options.quality.toString())
    
    // Добавляем параметры к URL, если они есть
    const queryString = params.toString()
    if (queryString) {
        url += `?${queryString}`
    }
    
    return url
}

// Универсальная функция, которая работает и на сервере, и на клиенте
export function getDirectusImageUrlUniversal(imageId: string, options: {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'inside' | 'outside';
    quality?: number;
} = {}): string {
    // Если мы на клиенте, используем обычную функцию
    if (import.meta.client) {
        try {
            // Импортируем динамически, чтобы избежать проблем SSR
            const { getDirectusImageUrl } = require('~/utils/directusImg')
            return getDirectusImageUrl(imageId, options)
        } catch {
            // Fallback на SSR версию
            return getDirectusImageUrlSSR(imageId, options)
        }
    }
    
    // На сервере всегда используем SSR версию
    return getDirectusImageUrlSSR(imageId, options)
}
