const BASE_URL = 'http://buytheticket.ddns.net/api'

export const getCities = async () => {
  const res = await fetch(`${BASE_URL}/cities/`);
  const data = await res.json();
  return data;
};

export const getCitiesById = async (id) => {
  const res = await fetch(`${BASE_URL}/cities/${id}/`);
  const data = await res.json();
  return data;
};