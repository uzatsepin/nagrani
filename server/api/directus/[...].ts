export default defineEventHandler(async (event) => {
  const { method, url } = event.node.req
  const body = method !== 'GET' ? await readBody(event) : undefined
  
  const directusUrl = `https://admin.nagrani.life${url?.replace('/api/directus', '') || ''}`
  
  try {
    const response = await $fetch(directusUrl, {
      method: method as any,
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    return response
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Directus API Error'
    })
  }
})