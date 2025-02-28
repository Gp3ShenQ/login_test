const baseUrl = process.env.NODE_ENV === 'development' ? '' : process.env.BASE_URL

const apiPaths = {
  RegisterPost: baseUrl +'/api/register/registerPost',
  RegisterDelete:baseUrl + '/api/register/registerDelete',
  CheckRegisterEmailGet:baseUrl + '/api/register/checkRegisterEmailGet',
  CheckRegisterAccountGet:baseUrl + '/api/register/checkRegisterAccountGet',

  LoginPost:baseUrl + '/api/login/loginPost',

  AddUserPost:baseUrl + '/api/user/addUserPost',
  CheckUserAllGet:baseUrl + '/api/user/checkUserAllGet',
  DeleteUserDelete:baseUrl + '/api/user/deleteUserDelete',
  DeleteUserAllDelete:baseUrl + '/api/user/deleteUserAllDelete',
  CheckUserPersonalPost:baseUrl + '/api/user/CheckUserPersonalPost',
}

export { apiPaths }
