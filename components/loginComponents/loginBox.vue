<template>
  <div class="top-1/2 left-1/2 z-10 fixed w-[500px] -translate-x-1/2 -translate-y-1/2 -translate-y-1/2 transform">
    <div class="flex flex-col items-center gap-5 bg-[url('/login/loginBox.png')] bg-cover bg-center px-15 pt-35 pb-15 w-full w-full max-w-[500px] h-full">
      <div class="flex justify-center gap-10">
        <div class="flex flex-col gap-5">
          <div class="w-[100px] max-h-[40px]">
            <img src="public/login/user_text.png" alt="" />
          </div>
          <div class="w-[150px] max-h-[40px]">
            <img src="public/login/password_text.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col gap-10 pt-2 w-full h-full">
          <div>
            <input class="border-2 border-yellow-400 rounded-md" type="text" v-model="userAccount" />
          </div>
          <div>
            <input class="border-2 border-yellow-400 rounded-md" type="text" v-model="userPassword" />
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-20">
        <div class="w-full max-w-[100px]" @click="action('login')">
          <img class="h-full cursor-pointer" src="public/login/login_button.png" alt="" />
        </div>
        <div class="w-full max-w-[100px]" @click="action('register')">
          <img class="h-full cursor-pointer" src="public/login/register_button.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

const userAccount = defineModel('userAccount')
const userPassword = defineModel('userPassword')

type Emit = {
  (e: 'login'): void
  (e: 'register'): void
}

const emit = defineEmits<Emit>()

const action = (target: string) => {
  if (target === 'login') {
    emit('login')
  }
  if (target === 'register') {
    emit('register')
  }
}
</script>
