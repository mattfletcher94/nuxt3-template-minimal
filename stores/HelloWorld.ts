import { acceptHMRUpdate, defineStore } from 'pinia'

export const useHelloWorldStore = defineStore('helloWorld', () => {
  const helloWorldMsg = ref('Hello World!')

  return {
    helloWorldMsg,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useHelloWorldStore, import.meta.hot))
