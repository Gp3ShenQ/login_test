// ~/composables/useAuth.ts
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/commonStore'

export function useAuth() {
  const token = ref<string | null>(null); // 從 localStorage 獲取 token

  if (process.client) {
    token.value = func_getLocalStorageLocale()
  }

  const commonStore = useCommonStore()
  const { isLogin, user } = storeToRefs(commonStore)


  const logout = () => {
    func_setLocalStorageLocaleRemove()
    user.value = null;
    isLogin.value = false
    navigateTo('/');
    console.log(process)
  };

  return { logout };
}