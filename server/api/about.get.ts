export default defineEventHandler(() => {
    console.log('接收到 API 請求 /api/about')

    return {
    name: 'Benson',
    gender: '男',
    email: 'a0988591269@gmail.com',
    }
})