const BASE_URL = 'https://6517d5ac582f58d62d3526f0.mockapi.io';

export const fetchContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const addContact = async data => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};
