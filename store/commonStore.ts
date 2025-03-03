import { defineStore } from 'pinia'

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    isLogin: false as boolean,
    user: {} as unknown,
  }),
})
