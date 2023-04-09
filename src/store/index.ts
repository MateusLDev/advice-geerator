import { defineStore } from "pinia";
import axios from "axios";

import IAdvice, { adviceInitialValue } from "../types/advices";

export type RootState = {
  advice: IAdvice;
};

export const useAdviceStore = defineStore("advice", {
  state: () =>
    ({
      advice: adviceInitialValue,
    } as RootState),

  actions: {
    async getAdvice() {
      try {
        const {
          data: { slip },
        } = await axios.get("https://api.adviceslip.com/advice");

        this.setAdvice(slip);
      } catch (error) {
        console.log(error);
      }
    },
    setAdvice(advice: IAdvice) {
      this.advice = advice;
    },
  },
});
