const BASE_URL = 'http://buytheticket.ddns.net/api';

export function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function register(username, email, password) {
  return fetch(`${BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password: password, re_password: password })
  }).then(res => _getResponseData(res));
}

export function signIn (email, password ) {
  return fetch(`${BASE_URL}/auth/token/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  }).then(res => _getResponseData(res))
}

export function tockenCheck (token) {
  return fetch(`${BASE_URL}/users/me/`, {
    headers: {
      "Authorization": `Token ${token}`,
      // "Authorization": `Token d4e15092fdeb862eba012f757c0c0497fbc3ccc5`,
      'Content-Type': 'application/json'
    }
  }).then(res => _getResponseData(res))
}

export function setUserInfo (userData, token) {
  const { username, last_name, phone, birthday } = userData;
  return fetch(`${BASE_URL}/users/me/`, {
    method: 'PATCH',
    headers: {
      "Authorization": `Token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      last_name,
      phone,
      birthday
    })
  }).then(res => _getResponseData(res))
}

export function signOut (token) {
  return fetch(`${BASE_URL}/auth/token/logout`, {
    method: 'POST',
    headers: {
      "Authorization": `Token ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(res => _getResponseData(res))
}

export function resetPasswordConfirm(uid, token, new_password) {
  return fetch(`${BASE_URL}/api/users/set_password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({uid, token, new_password})
  }).then(res => _getResponseData(res));
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