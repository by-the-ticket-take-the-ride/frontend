/* заглушка для тестирования */
const MAIN_API_URL = 'http://buytheticket.ddns.net/api'

/**
 * 
 * @param {*} userData
 * {
    "username": "string",
    "id": 0,
    "email": "user@example.com"
  }
 */

export const getCurrentUser = (id) => {
  return fetch(`${MAIN_API_URL}/users/${id}`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
  .catch(err => {
    console.log(err);
  })
}

/**
 * 
 * @param {*} userData
 * {
    surname: 'Иванов',
    name: 'Иван',
    dateOfBirth: '31.03.1997',
    city: 'Москва',
    telephone: '+7 (981) 333 - 22 - 11',
    email: 'IvanMail@yandex.ru'
  }
 */

export const setUserInfo = (userData, id) => {
  return fetch(`${MAIN_API_URL}/users/${id}`, {
    method: 'PATCH',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( userData )
  })
  .then( res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
}

