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
      "Authorization": "Token 3231987740ee4dfee24a5daa618fdc21e84eef72",
      'Content-Type': 'application/json'
    }
  }).then( res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
  .catch(err => {
    console.log(err);
  })
}

