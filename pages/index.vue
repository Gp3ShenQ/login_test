<template>
  <template v-if="isNotLogin">
    <loginComponentsLogin />
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import loginApiStore from '@/utils/api/loginApiStore'

const router = useRouter()

const commonStore = useCommonStore()
const { isLogin, user } = storeToRefs(commonStore)
const { func_loginTokenCheckPost } = loginApiStore()

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

const isNotLogin = computed(() => !isLogin.value)

const localeToken = async () => {
  const _token: string = await func_getLocalStorageLocale()
  console.log('localeToken', _token)
  return _token
}

const initUser = async () => {
  const _token: string = await localeToken()
  console.log('_token', _token)
  if (_token) {
    const _user: ResponseUser = await func_loginTokenCheckPost(_token)
    console.log('_user', _user.user)
    user.value = _user.user
    isLogin.value = true
    // navigateTo('/chatView')
    router.push('/chatView')
  }
}

onMounted(async () => {
  await initUser()
})
</script>
