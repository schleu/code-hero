/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState } from "react";

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;

export function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay = 1000
) {
  const timer = useRef<Timer>();
  const [r, setR] = useState<any>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = ((...args) => {
    let response;

    const newTimer = setTimeout(() => {
      response = func(...args);
      setR(response);
      return response;
    }, delay);
    clearTimeout(timer.current);

    timer.current = newTimer;
    return r;
  }) as Func;

  return debouncedFunction;
}
