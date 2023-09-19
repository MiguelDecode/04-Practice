import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";
import { User } from "../models/user";

/**
 *
 * @param {String | Number} id
 * @returns {Promise<User>}
 */
export const getUserbyId = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

  const res = await fetch(url);

  const json = await res.json();

  const user = localhostUserToModel(json);
  console.log(user);

  return user;
};
