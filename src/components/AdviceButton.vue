<script setup lang="ts">
import { useAdviceStore } from "../store/index";
const adviceStore = useAdviceStore();
</script>

<template>
  <div class="advice-button" @click="adviceStore.getAdvice()">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="#202733"
      />
    </svg>
  </div>
</template>

<style scoped>
.advice-card {
  width: 30rem;
  border-radius: 30px;
  background-color: hsl(217, 19%, 24%);

  text-align: center;

  padding: 40px;
}

.advice-button {
  background-color: rgb(82, 255, 168);
  width: 60px;
  height: 60px;
  border-radius: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -30px;
  left: calc(50% - 30px);

  cursor: pointer;
  transition: 0.1s;
}

.advice-button:hover {
  box-shadow: 0px 0px 25px 0px rgba(82, 255, 168, 0.5);
}
</style>
