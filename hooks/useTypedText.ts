//@ts-ignore
import { useTypeWriter } from "@vegadev/react-type-writer";

export const useTypedText = (specials: string[]) => {
  const text = useTypeWriter({
    text: specials,
    infiniteLoop: true,
    blinker: "|",
    delay: 5000,
    blinkerDelay: 500,
  });

  return text;
};
