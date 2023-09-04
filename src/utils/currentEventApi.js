const MAIN_API_URL = 'http://buytheticket.ddns.net/api'

export const getAllEvents = () => {
  return fetch(`${MAIN_API_URL}/events/`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
    .catch(err => {
      console.log(err);
    })
}

export const getCurrentEvent = (id) => {
  return fetch(`${MAIN_API_URL}/events/${id}`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
    .catch(err => {
      console.log(err);
    })
}
export const getTickets = () => {
  return fetch(`${MAIN_API_URL}/tickets`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
    .catch(err => {
      console.log(err);
    })
}