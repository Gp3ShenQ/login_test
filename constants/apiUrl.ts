import { useRuntimeConfig } from '#app'

const apiPaths = {
  RegisterPost: '/api/register/registerPost',
  RegisterDelete: '/api/register/registerDelete',
  CheckRegisterEmailGet: '/api/register/checkRegisterEmailGet',
  CheckRegisterAccountGet: '/api/register/checkRegisterAccountGet',

  LoginPost: '/api/login/loginPost',
  LoginTokenCheckPost: '/api/login/loginTokenCheckPost',

  AddUserPost: '/api/user/addUserPost',
  CheckUserAllGet: '/api/user/checkUserAllGet',
  DeleteUserDelete: '/api/user/deleteUserDelete',
  DeleteUserAllDelete: '/api/user/deleteUserAllDelete',
  CheckUserPersonalPost: '/api/user/CheckUserPersonalPost',
}

const generateUrl = (path: keyof typeof apiPaths) => {
  const config = useRuntimeConfig()
  
  return process.env.NODE_ENV === 'development' 
    ? apiPaths[path] 
    : config.public.API_BASE_URL + apiPaths[path]
}

export { generateUrl, apiPaths }
