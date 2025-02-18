<template>
  <loginBox v-model:userAccount="userAccount" v-model:userPassword="userPassword" @login="userAction('login')" @register="userAction('register')" />
  <div id="scene" class="w-full h-full overflow-hidden">
    <div class="relative flex justify-center items-center pt-100 pr-100 min-w-[150%] min-h-[100%]" data-depth="0.6">
      <div class="top-1/2 left-[33%] z-[-1] absolute w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 transform">
        <img class="w-full h-auto" src="/login/background_street.png" alt="" />
      </div>
      <div class="flex justify-center items-center gap-20 h-full">
        <div class="flex items-center h-full">
          <div class="flex items-end pb-20 h-full">
            <div class="w-full max-w-[180px]" data-depth="0.5">
              <img src="/login/people1.png" alt="" />
            </div>
          </div>
          <div>
            <div class="w-full max-w-[100px]">
              <img src="/login/people3.png" alt="" />
            </div>
            <div class="w-full max-w-[140px]">
              <img src="/login/people2.png" alt="" />
            </div>
          </div>
        </div>

        <div class="flex items-center h-full">
          <div class="pt-50 w-full max-w-[120px] h-full">
            <img src="/login/people4.png" alt="" />
          </div>
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-center w-full">
              <div class="w-full max-w-[50px]">
                <img src="/login/people10.png" alt="" />
              </div>
            </div>
            <div class="w-full max-w-[220px]">
              <img src="/login/people7.png" alt="" />
            </div>
          </div>

          <div class="pb-100">
            <div class="w-full max-w-[90px]">
              <img src="/login/people5.png" alt="" />
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center gap-20 pt-20 h-full">
          <div class="w-full max-w-[100px]">
            <img src="/login/people6.png" alt="" />
          </div>
          <div class="w-full max-w-[130px]">
            <img src="/login/people8.png" alt="" />
          </div>
        </div>
        <div class="flex items-end pb-20 h-full">
          <div class="w-full max-w-[180px]">
            <img src="/login/people9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Parallax from 'parallax-js'
import loginBox from '~/components/loginComponents/loginBox.vue'

const userAccount = ref('')
const userPassword = ref('')

const userAction = (target: string) => {
  if (target === 'login') {
    console.log('login')
    console.log('userAccount', userAccount.value)
    console.log('userPassword', userPassword.value)
  }
  if (target === 'register') {
    console.log('register')
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
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
</style>
