export function formatPrice(price: number | string | null | undefined): string {
    if (price === null || price === undefined) return 'Безкоштовно';
    
    return new Intl.NumberFormat('uk-UA', {
        currency: 'UAH',
        maximumFractionDigits: 0,
    }).format(Number(price));
}