<script setup lang="ts">
import { ref, computed, watch, defineProps } from "vue";

import IAdvice from "../types/advices";

import Divider from "./icons/Divider.vue";
import Button from "./AdviceButton.vue";

const props = defineProps<{ advice: IAdvice }>();

const adviceTitle = computed(() => {
  return `Advice #${props.advice.id}`;
});

const adviceQuote = computed(() => {
  return `"${props.advice.advice}"`;
});
</script>

<template>
  <div class="advice-card">
    <div class="advice-title">{{ adviceTitle }}</div>
    <div class="advice-quote">{{ adviceQuote }}</div>

    <Divider />

    <Button />
  </div>
</template>

<style scoped>
.advice-card {
  width: 30rem;
  min-height: 10rem;
  border-radius: 30px;
  background-color: hsl(217, 19%, 24%);

  text-align: center;

  padding: 40px;
  position: relative;
}

.advice-title {
  color: hsl(150, 100%, 66%);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;

  margin-bottom: 20px;
}
.advice-quote {
  color: hsl(193, 38%, 86%);
  font-size: 28px;

  margin-bottom: 24px;
}
</style>
