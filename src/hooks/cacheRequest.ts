/* eslint-disable @typescript-eslint/no-explicit-any */
export async function cacheRequest<T>(
  k: any,
  callback: () => Promise<any>,
  timeCache?: number
) {
  let characters: T;

  const key = JSON.stringify(k);
  const ls = localStorage.getItem(key);

  if (ls === null) {
    characters = await callback();
    localStorage.setItem(key, JSON.stringify(characters));
    setTimeout(() => {
      localStorage.removeItem(key);
    }, timeCache || 30 * 60 * 1000);
  } else {
    characters = JSON.parse(ls);
  }

  return characters;
}
