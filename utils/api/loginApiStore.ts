import { generateUrl } from '@/constants/apiUrl'

export default function loginApiStore() {
  type LoginPost = {
    account?: string
    password: string
    email?: string
  }

  type User = {
    account: string
    email: string
    id: number
    password: string
    token: string
    age: number
    name: string
  }
  
  type ResponseUser = {
    statusCode: number
    statusMessage: string
    user: User
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

  const func_loginTokenCheckPost = async (params: string) => {
    try {
      const _result :ResponseUser = await $fetch(generateUrl('LoginTokenCheckPost'), {
        method: 'POST',
        body: { token: params },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('func_loginTokenCheckPost',_result)
      return _result 
    } catch (error) {
      console.error('api', error)
      return error
    }
  }

  return {
    func_loginPost,
    func_loginTokenCheckPost,
  }
}
