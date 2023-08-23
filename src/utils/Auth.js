const BASE_URL = 'http://site.com';

export function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function register(name, email, password) {
  return fetch(`$BASE_URL/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  }).then(res => _getResponseData(res));
}