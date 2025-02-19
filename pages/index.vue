<template>
  <template v-if="isNotLogin">
    <login />
  </template>
  <template v-if="isLogin">
    <NuxtPage />
  </template>
</template>

<script setup lang="ts">
import {} from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

import login from '@/components/login.vue'

const commonStore = useCommonStore()
const { isLogin } = storeToRefs(commonStore)

const isNotLogin = computed(() => !isLogin.value)
</script>
