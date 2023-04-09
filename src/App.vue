<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useAdviceStore } from "./store/index";

import AdviceCard from "./components/AdviceCard.vue";

import IAdvice from "./types/advices";

const adviceStore = useAdviceStore();

let advice = ref<IAdvice>({ id: 0, advice: "" });

onMounted(async () => {
  await adviceStore.getAdvice();
});
</script>

<template>
  <div class="advice-wrapper">
    <AdviceCard :advice="adviceStore.advice" />
  </div>
</template>

<style scoped>
.advice-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
