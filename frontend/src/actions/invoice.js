import { API_ROOT } from './api-config';

function getUsers() {
  return fetch(`${API_ROOT}/users`)
    .then(res => res.json)
    .then(json => json.data.users);
}