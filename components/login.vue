<template>
  <loginBox v-model:userAccount="userAccount" v-model:userPassword="userPassword" @login="userAction('login')" @register="userAction('register')" @fix="userAction('fix')" />
  <div id="scene" class="w-full h-full overflow-hidden">
    <div class="relative flex justify-center items-center pt-100 pr-150 max-[1200px]:pr-100 max-[900px]:pr-70 min-w-[150%] min-h-[100%]" data-depth="0.6">
      <div class="top-1/2 left-[33%] z-[-1] absolute w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 transform">
        <img class="min-w-[150vw] min-h-[150vh]" src="/login/background_street.png" alt="" />
      </div>
      <div class="flex justify-center items-center gap-20 h-full">
        <div class="flex items-center h-full">
          <div class="flex items-end -pl-20 h-full max-[1300px]:hidden">
            <div class="w-full max-w-[180px] animated1" data-depth="0.5">
              <img src="/login/people1.png" alt="" />
            </div>
          </div>
          <div class="pb-100 max-[1300px]:pl-20 max-[600px]:hidden">
            <div class="w-full max-w-[100px]">
              <img src="/login/people3.png" alt="" />
            </div>
            <div class="w-full max-w-[140px]">
              <img src="/login/people2.png" alt="" />
            </div>
          </div>
        </div>

        <div class="flex items-center h-full max-[600px]:mt-30">
          <div class="w-full max-w-[120px] h-full max-[1300px]:hidden">
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

          <div class="pb-100 pr-50 max-[600px]:hidden">
            <div class="w-full max-w-[90px]">
              <img src="/login/people5.png" alt="" />
            </div>
            <div class="w-full max-w-[100px]">
              <img src="/login/people6.png" alt="" />
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-start items-start h-full max-[800px]:hidden">
          <div class="flex items-start pb-0 h-full">
            <div class="w-full max-w-[100px] animated2 max-[1300px]:hidden">
              <img src="/login/people8.png" alt="" />
            </div>
          </div>
          <div class="w-full max-w-[250px] max-[1100px]:hidden">
            <img src="/login/people9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import Parallax from 'parallax-js'
import loginBox from '~/components/loginComponents/loginBox.vue'

const router = useRouter()
const commonStore = useCommonStore()
const { isLogin } = storeToRefs(commonStore)

const userAccount = ref('')
const userPassword = ref('')

const userAction = (target: string) => {
  if (target === 'login') {
    console.log('login')
    console.log('userAccount', userAccount.value)
    console.log('userPassword', userPassword.value)
    isLogin.value = true
    router.push('fixView')
  }
  if (target === 'register') {
    console.log('register')
    router.push('fixView')
  }
}

onMounted(() => {
  const scene = document.getElementById('scene')
  if (scene) {
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    })

    parallaxInstance.friction(0.2, 0.2)
  } else {
    console.error('Element with ID "scene" not found.')
  }
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
