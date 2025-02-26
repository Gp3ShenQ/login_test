<template>
  <loginBox v-model:userAccount="userAccount" v-model:userPassword="userPassword" @login="userAction('login')" @register="userAction('register')" @fix="userAction('fix')" />
  <div id="scene" class="w-full h-full overflow-hidden">
    <div class="relative flex justify-center items-center pt-100 pr-150 max-[1200px]:pr-100 max-[900px]:pr-70 min-[2200px]:pr-190 min-[2500px]:pr-290 min-[1600px]:pr-200 min-w-[150%] min-h-[100%]" data-depth="0.6">
      <div class="top-0 left-0 z-[-1] absolute w-full transform">
        <img class="-top-50 -left-80 absolute min-w-[1800px] min-h-[150vh] object-center" src="/login/background_street.png" alt="" />
      </div>
      <div class="flex justify-center items-center gap-20 h-full">
        <div class="flex items-center h-full">
          <div class="max-[1300px]:hidden flex items-end -pl-20 h-full">
            <div class="w-full max-w-[180px] animated1" data-depth="0.5">
              <img src="/login/people1.png" alt="" />
            </div>
          </div>
          <div class="max-[600px]:hidden pb-100 max-[1300px]:pl-20">
            <div class="w-full max-w-[100px]">
              <img src="/login/people3.png" alt="" />
            </div>
            <div class="w-full max-w-[140px]">
              <img src="/login/people2.png" alt="" />
            </div>
          </div>
        </div>

        <div class="flex items-center max-[600px]:mt-30 h-full">
          <div class="max-[1300px]:hidden w-full max-w-[120px] h-full">
            <img src="/login/people4.png" alt="" />
          </div>
          <div class="flex flex-col h-full">
            <div class="w-full max-w-[50px]">
              <img src="/login/people10.png" alt="" />
            </div>
            <div class="w-full max-w-[220px] animated3">
              <img src="/login/people7.png" alt="" />
            </div>
          </div>

          <div class="max-[600px]:hidden pr-50 pb-100">
            <div class="w-full max-w-[90px]">
              <img src="/login/people5.png" alt="" />
            </div>
            <div class="w-full max-w-[100px]">
              <img src="/login/people6.png" alt="" />
            </div>
          </div>
        </div>

        <div class="max-[800px]:hidden flex flex-col justify-start items-start h-full">
          <div class="flex items-start pb-0 h-full">
            <div class="max-[1300px]:hidden w-full max-w-[100px] animated2">
              <img src="/login/people8.png" alt="" />
            </div>
          </div>
          <div class="max-[1100px]:hidden w-full max-w-[250px]">
            <img src="/login/people9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'
import loginApiStore from '@/utils/api/loginApiStore'
import registerApiStore from '@/utils/api/registerApiStore'

import Swal from 'sweetalert2'
import Parallax from 'parallax-js'
import loginBox from '~/components/loginComponents/loginBox.vue'

const router = useRouter()
const commonStore = useCommonStore()
const { func_loginPost } = loginApiStore()
const { isLogin } = storeToRefs(commonStore)
const { func_RegisterPost } = registerApiStore()

const userAccount = ref('')
const userPassword = ref('')

const userAction = (target: string) => {
  if (target === 'login') {
    // isLogin.value = true
    // router.push('fixView')
    login()
  }
  if (target === 'register') {
    // router.push('fixView')
    register()
  }
}

const initParallax = () => {
  const scene = document.getElementById('scene')
  if (scene) {
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    })
    parallaxInstance.friction(0.2, 0.2)
  } else {
    console.error('Element with ID "scene" not found.')
  }
}

const login = async () => {
  const _params = {
    account: userAccount.value,
    password: userPassword.value,
  }

  const _result = await func_loginPost(_params)
  console.log('result', _result)
  if (_result.statusCode == 200) {
    Swal.fire({
      icon: 'success',
      title: '登入成功',
      showConfirmButton: true,
    }).then(() => {
      // isLogin.value = true
      userAccount.value = ''
      userPassword.value = ''
    })
  } else if (_result.statusCode == 401) {
    Swal.fire({
      icon: 'error',
      title: '帳號或密碼錯誤',
      showConfirmButton: true,
    })
  }
}
const register = async () => {
  const _params = {
    account: userAccount.value,
    email: '',
    password: userPassword.value,
  }

  const _result = await func_RegisterPost(_params)
  console.log('result', _result)
  if (_result.statusCode == 200) {
    Swal.fire({
      icon: 'success',
      title: '註冊成功',
      text: '請重新登入',
      showConfirmButton: true,
    }).then(() => {
      // isLogin.value = true
      userAccount.value = ''
      userPassword.value = ''
    })
  } else if (_result.statusCode == 401) {
    Swal.fire({
      icon: 'error',
      title: '帳號或密碼錯誤',
      showConfirmButton: true,
    })
  }
}

onMounted(() => {
  initParallax()
})
</script>

<style scoped>
.animated1 {
  animation: pbAnimation1 1s infinite alternate;
}

@keyframes pbAnimation1 {
  0% {
    padding-bottom: 0rem;
  }
  50% {
    padding-bottom: 3rem;
  }
  100% {
    padding-bottom: 0rem;
  }
}
.animated2 {
  animation: pbAnimation2 5s infinite alternate;
}

@keyframes pbAnimation2 {
  0% {
    padding-bottom: 0rem;
  }
  50% {
    padding-bottom: 2rem;
  }
  100% {
    padding-bottom: 0rem;
  }
}
.animated3 {
  animation: pbAnimation3 2s infinite alternate;
}

@keyframes pbAnimation3 {
  0% {
    padding-bottom: 0rem;
  }
  50% {
    padding-bottom: 2rem;
  }
  100% {
    padding-bottom: 0rem;
  }
}
</style>
