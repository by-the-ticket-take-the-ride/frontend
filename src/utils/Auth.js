const BASE_URL = 'http://buytheticket.ddns.net';

export function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function register(username, email, password, re_password) {
  return fetch(`${BASE_URL}/api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, email, password, re_password})
  }).then(res => _getResponseData(res));
}

export function login(email, password) {
  return fetch(`${BASE_URL}/api/auth/token/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }).then(res => _getResponseData(res))
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      console.log(data.token);
      return data;
    })
}

export function resetPassword(email) {
  return fetch(`${BASE_URL}/api/users/reset_password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  }).then(res => _getResponseData(res));
}

export function setPassword(new_password, re_new_password, current_password) {
  return fetch(`${BASE_URL}/api/users/set_password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({new_password, re_new_password, current_password})
  }).then(res => _getResponseData(res));
}