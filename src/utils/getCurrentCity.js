export const controller = new AbortController();
const signal = controller.signal;
export const getCurrentCity = async () => {
  const res = await fetch("https://ipapi.co/city", {
    method: 'GET',
    signal: signal
  });
  const city = await res.text();
  return city;
};