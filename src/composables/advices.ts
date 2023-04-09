import axios from "axios";
import { useAdviceStore } from "../store/index";

const { setAdvice } = useAdviceStore();

export default async function getAdvice() {
  try {
    const {
      data: { slip },
    } = await axios.get("https://api.adviceslip.com/advice");

    setAdvice(slip);
  } catch (error) {
    console.log(error);
  }
}
