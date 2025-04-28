// utils/directus.ts
export function getDirectusImageUrl(imageId: string, options: {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'inside' | 'outside';
    quality?: number;
  } = {}): string {
    const config = useRuntimeConfig();

    // Получаем базовый URL Directus из переменных окружения
    const directusUrl = config.public.directusUrl || 'http://localhost:8055';
    
    // Базовый URL для получения ассетов
    let url = `${directusUrl}/assets/${imageId}`;
    
    // Добавляем параметры трансформации, если они переданы
    const params = new URLSearchParams();
    
    if (options.width) params.append('width', options.width.toString());
    if (options.height) params.append('height', options.height.toString());
    if (options.fit) params.append('fit', options.fit);
    if (options.quality) params.append('quality', options.quality.toString());
    
    // Добавляем параметры к URL, если они есть
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    
    return url;
  }