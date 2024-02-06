export function fetcher(url: string, init?: RequestInit | undefined) {
  return async () => {
    const res = await fetch(url, init);
    try {
      return await res.json();
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };
}
