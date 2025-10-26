import { useCallback, useEffect, useState } from "react";

export function useTypingEffect(value: string[]) {
  const [text, setText] = useState("");
  const [renderedIdx, setRenderedIdx] = useState(0);

  const createText = useCallback(
    async (txt: string, idx: number, textLength: number) => {
      await new Promise((resolve) => {
        setTimeout(() => resolve(null), 1000);
      });

      if (textLength - 1 === idx && value.length > renderedIdx + 1) {
        setRenderedIdx(renderedIdx + 1);
        setText((prev) => `${prev}${txt}<br>`);
      } else {
        setText((prev) => prev + txt);
      }
    },
    [renderedIdx, value.length],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const splitText = value[renderedIdx]?.split("");
    const timeoutArr: NodeJS.Timeout[] = [];

    splitText?.forEach((txt, idx) => {
      const timeoutId = setTimeout(
        () => createText(txt, idx, splitText.length),
        idx * 100,
      );
      timeoutArr.push(timeoutId);
    });

    return () => {
      // biome-ignore lint/suspicious/useIterableCallbackReturn: <explanation>
      timeoutArr.forEach((id) => clearTimeout(id));
    };
  }, [value.length, renderedIdx, createText, setRenderedIdx]);

  return text;
}
