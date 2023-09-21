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

export const getUserApi = async () => {
  const res = await fetch('https://api.db-ip.com/v2/free/self')
  const userApi = await res.json();
  return userApi
}

export const getCurrentCityRus = async (ip) => {
  let token = 'b8f79f3720dc6482f32b982f8c26744d884f8577'
  const res = await fetch(`${'https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=' + ip}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    }
  })
  return await res.json()
}

