import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

  const res = await fetch(url);

  const json = await res.json();

  const arrUsers = json.map((data) => localhostUserToModel(data));

  return arrUsers;
};
