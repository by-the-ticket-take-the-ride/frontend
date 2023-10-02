const MAIN_API_URL = 'http://buytheticket.ddns.net/api'

export const getAllEvents = () => {
  return fetch(`${MAIN_API_URL}/events/`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
    .catch(err => {
      console.log(err);
    })
}
export const getAllEventsAuthUser = (token) => {
  return fetch(`${MAIN_API_URL}/events/`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Token ${token}`

    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
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
  }).catch(err => {
    console.log(err);
  })
}
export const getTickets = (token) => {
  return fetch(`${MAIN_API_URL}/tickets`, {
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Token ${token}`
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
    .catch(err => {
      console.log(err);
    })
}

export const addEventToFavorites = (id, token) => {
  return fetch(`${MAIN_API_URL}/events/${id}/favorite/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": `Token bde5f6e58daef89a1000cd0a02caf8d1521da259`
      "Authorization": `Token ${token}`
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
}
export const deleteEventToFavorites = (id, token) => {
  return fetch(`${MAIN_API_URL}/events/${id}/favorite/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": `Token bde5f6e58daef89a1000cd0a02caf8d1521da259`
      "Authorization": `Token ${token}`
    }
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
}

export const addNewTicket = (
  eventId,
  zoneId,
  row,
  seat,
  token
) => {
  return fetch(`${MAIN_API_URL}/tickets/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": `Token bde5f6e58daef89a1000cd0a02caf8d1521da259`
      "Authorization": `Token ${token}`
    },
    body: JSON.stringify(
      {
        "event": eventId,
        "zone_hall": zoneId,
        "row": row,
        "seat": seat,
        "is_paid": true
      }
    )

  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
}
export const addNewTicketWithEmail = (
  eventId,
  zoneId,
  row,
  seat,
  guest,
  token
) => {

  return fetch(`${MAIN_API_URL}/tickets/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": `Token bde5f6e58daef89a1000cd0a02caf8d1521da259`
      "Authorization": `Token ${token}`
    },
    body: JSON.stringify(
      {
        "event": eventId,
        "zone_hall": zoneId,
        "row": row,
        "seat": seat,
        "guest": {
          "username": guest.username,
          "email": guest.email,
          "phone": `+${guest.phone}`,
          "telegram": "@user"
        },
        "is_paid": true
      }
    )

  }).then(res => {
    return res.ok ? res.json() : Promise.reject(res.status)
  })
}