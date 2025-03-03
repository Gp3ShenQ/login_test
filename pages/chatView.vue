<template>
  <div class="w-full h-screen overflow-hidden flex justify-center py-5">
    <div class="absolute top-0 left-0 z-[-1] blur-xs">
      <img class="top-0 left-0 absolute min-w-[1800px] min-h-[160vh] object-center" src="/public/chat/chat_background.png" alt="" />
    </div>

    <div class="w-full max-w-[500px] bg-white flex flex-col rounded-3xl overflow-hidden">
      <div class="w-full h-12 bg-[#FFEEDD] flex items-center">
        <div class="flex justify-start w-full pl-5 gap-2 pt-2">
          <img class="w-[40px] animate" src="/public/chat/title4.png" alt="" />
          <img class="w-[50px] animate" src="/public/chat/title1.png" alt="" />
          <img class="w-[40px] animate" src="/public/chat/title3.png" alt="" />
          <img class="w-[50px] animate" src="/public/chat/title2.png" alt="" />
        </div>
        <div class="w-full flex justify-end pr-5" @click="checkLogout">
          <img class="w-[30px] h-[30px] cursor-pointer" src="/public/chat/close_icon.png" alt="" />
        </div>
      </div>
      <div class="w-full h-full border-2 border-[#FFEEDD] border-10">1234</div>
      <div class="bg-[#F0E7D8] gap-5 pl-5 p-5 flex justify-around">
        <input class="w-full border-2 border-[#B8B8FF]" type="text" />
        <div class="w-[30px] -pt-10 rounded-full" :class="{ active: sendButton }" @mousedown="buttonActive" @mouseup="buttonDeactivate">
          <img class="cursor-pointer" src="/public/chat/cat_hande.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'

const { logout } = useAuth()

const sendButton = ref(false)

const buttonActive = () => {
  sendButton.value = true
}

const buttonDeactivate = () => {
  sendButton.value = false
}

const checkLogout = () => {
  Swal.fire({
    icon: 'question',
    title: '確定要登出？',
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      logout()
    }
  })
}
</script>

<style scoped lang="scss">
.animate {
  animation: move 3s ease-in-out infinite;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: rotate(25deg);
  }
  100% {
    transform: translateY(0);
  }
}

.active {
  transition: all 0.2s ease-in-out;
  transform: scale(1.3);
}
</style>
~/composables/useUserAuth
