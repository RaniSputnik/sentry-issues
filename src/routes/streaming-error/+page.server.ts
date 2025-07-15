import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
    const streamedData = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Slow data error')), 2000))
    return { streamedData }
}