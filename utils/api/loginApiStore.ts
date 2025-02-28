import { generateUrl } from '@/constants/apiUrl'

export default function loginApiStore() {
  type LoginPost = {
    account?: string
    password: string
    email?: string
  }

  const func_loginPost = async (params: LoginPost) => {
    const _params = params
    try {
      const _result = await $fetch(generateUrl('LoginPost'), {
        method: 'POST',
        body: _params,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return _result
    } catch (error) {
      console.error('api', error)
      return error
    }
  }

  return {
    func_loginPost,
  }
}
