export default interface IAdvice {
  id: number;
  advice: string;
}

const adviceInitialValue: IAdvice = {
  id: 0,
  advice: "",
};

export { adviceInitialValue };
