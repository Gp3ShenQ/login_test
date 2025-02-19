<template>
  <div class="top-[50%] left-1/2 z-10 fixed w-[500px] -translate-x-1/2 -translate-y-1/2 -translate-y-1/2 max-h-[378px] h-full transform max-w-[500px] w-full ">
    <div class=" absolute top-0 left-0 z-[-1]">
      <img src="public/login/loginBox.png" alt="" />
    </div>
    <!-- <div class="flex flex-col items-center gap-5 bg-[url('/login/loginBox.png')] bg-cover bg-center px-15 pt-35 pb-13 w-full w-full max-w-[500px] h-full"> -->
    <div class="w-full h-full flex  flex-col px-15  justify-center mt-5 max-[450px]:justify-start max-[450px]:mt-25 max-[450px]:px-10">
      <div class="flex  gap-5 mb-5">
        <div class="flex flex-col gap-5  max-[450px]:gap-2">
          <div class="w-[100px] max-h-[40px] max-[450px]:w-[80px]">
            <img src="public/login/user_text.png" alt="" />
          </div>
          <div class="w-[150px] max-h-[40px] max-[450px]:w-[100px] ">
            <img src="public/login/password_text.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col gap-10 max-[450px]:gap-5 items-center w-full h-full">
          <div>
            <input class="border-2 border-yellow-400 rounded-md" type="text" v-model="userAccount" />
          </div>
          <div>
            <input class="border-2 border-yellow-400 rounded-md" type="text" v-model="userPassword" />
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-20 h-[43px]">
        <!-- <div class="w-full max-w-[100px]" @click="action('login')"> -->
        <div class="w-full max-w-[100px]" @mousedown="loginIsActive = true" @mouseup="loginIsActive = false">
          <template v-if="!loginIsActive">
            <div class="w-full max-w-[100px]  h-full cursor-pointer">
              <img src="public/login/login_button.png" alt="" />
            </div>
          </template>
          <template v-if="loginIsActive">
            <div class="w-full max-w-[100px]  cursor-pointer">
              <img src="public/login/login_button_active.png" alt="" />
            </div>
          </template>
        </div>
        <!-- <div class="w-full max-w-[100px]" @click="action('register') " > -->
        <div class="w-full max-w-[100px]" @mousedown="registerIsActive = true" @mouseup="registerIsActive = false">
          <template v-if="!registerIsActive">
            <div class="w-full max-w-[100px] h-full  cursor-pointer">
              <img class="" src="public/login/register_button.png" alt="" />
            </div>
          </template>
          <template v-if="registerIsActive">
            <div class="w-full max-w-[100px] h-full cursor-pointer">
              <img class="" src="public/login/register_button_active.png" alt="" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userAccount = defineModel('userAccount')
const userPassword = defineModel('userPassword')

type Emit = {
  (e: 'login'): void
  (e: 'register'): void
}

const emit = defineEmits<Emit>()

const loginIsActive = ref(false)
const registerIsActive = ref(false)

const action = (target: string) => {
  if (target === 'login') {
    emit('login')
  }
  if (target === 'register') {
    emit('register')
  }
}
</script>
