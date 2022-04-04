<script setup lang="ts">
import { useHelloWorldStore } from '~/stores/HelloWorld'

const store = useHelloWorldStore()

</script>
<template>
  <div class="text-center">
    <h1 class="text-2xl">
      {{ store.helloWorldMsg }}
    </h1>
  </div>
</template>
