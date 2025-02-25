<template>
  <div class="top-[50%] left-1/2 z-10 fixed w-[500px] w-full max-w-[500px] h-full max-h-[378px] -translate-x-1/2 -translate-y-1/2 -translate-y-1/2 transform">
    <div class="top-0 left-0 z-[-1] absolute">
      <img src="public/login/loginBox.png" alt="" />
    </div>
    <div class="flex flex-col justify-center max-[450px]:justify-start mt-5 max-[450px]:mt-25 px-15 max-[450px]:px-10 w-full h-full">
      <div class="flex gap-5 my-10 max-[450px]:my-2">
        <div class="flex flex-col gap-5 max-[450px]:gap-2">
          <div class="w-[100px] max-[450px]:w-[80px] max-h-[40px]">
            <img src="public/login/user_text.png" alt="" />
          </div>
          <div class="w-[150px] max-[450px]:w-[100px] max-h-[40px]">
            <img src="public/login/password_text.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col items-center gap-9 max-[450px]:gap-5 mt-2 w-full h-full">
          <div>
            <input class="px-2 py-px border-2 border-yellow-400 rounded-md" type="text" v-model="userAccount" />
          </div>
          <div>
            <input class="px-2 border-2 border-yellow-400 rounded-md" type="password" v-model="userPassword" />
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-20 h-[43px]">
        <!-- <div class="w-full max-w-[100px]" @click="action('login')"> -->
        <div class="w-full max-w-[100px]" @mousedown="isActive('login')" @mouseup="notActive('login')">
          <template v-if="!loginIsActive">
            <div class="w-full max-w-[100px] h-full cursor-pointer">
              <img src="public/login/login_button.png" alt="" />
            </div>
          </template>
          <template v-if="loginIsActive">
            <div class="w-full max-w-[100px] cursor-pointer">
              <img src="public/login/login_button_active.png" alt="" />
            </div>
          </template>
        </div>
        <!-- <div class="w-full max-w-[100px]" @click="action('register') " > -->
        <div class="w-full max-w-[100px]" @mousedown="isActive('register')" @mouseup="notActive('register')">
          <template v-if="!registerIsActive">
            <div class="w-full max-w-[100px] h-full cursor-pointer">
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
</template>

<script setup lang="ts">
const router = useRouter()

const userAccount = defineModel('userAccount')
const userPassword = defineModel('userPassword')

type Emit = {
  (e: 'login'): void
  (e: 'register'): void
}

const emit = defineEmits<Emit>()

const loginIsActive = ref(false)
const registerIsActive = ref(false)

const isActive = (target: string) => {
  if (target === 'login') {
    loginIsActive.value = true
  }
  if (target === 'register') {
    registerIsActive.value = true
  }
}

const notActive = (target: string) => {
  if (target === 'login') {
    loginIsActive.value = false
    emit('login')
  }
  if (target === 'register') {
    registerIsActive.value = false
    emit('register')
  }
}
</script>
