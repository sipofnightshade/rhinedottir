type MemoizedFunction<T> = (...args: any[]) => T;

function memoize<T>(func: MemoizedFunction<T>, ttl: number = 30000): MemoizedFunction<T> {
  const cache: { [key: string]: { value: T; timestamp: number } } = {};

  return (...args: any[]): T => {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.hasOwnProperty(key) && now - cache[key].timestamp < ttl) {
      return cache[key].value;
    } else {
      const result = func(...args);
      cache[key] = { value: result, timestamp: now };
      return result;
    }
  };
}
// GPT LINK: https://chat.openai.com/share/36f4cd31-8223-4d32-a4e4-9382dd462bbd
