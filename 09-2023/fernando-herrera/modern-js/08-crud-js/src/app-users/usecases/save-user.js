import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper.js";
import { User } from "../models/user.js";
/**
 *
 * @param {User} user
 */
export const saveUser = async (user) => {
  const newUser = new User(user);

  if (!newUser.firstName || !newUser.lastName)
    throw "First & last name are required";

  const userToSave = userModelToLocalhost(newUser);

  let userUpdated;

  if (newUser.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }

  return localhostUserToModel(userUpdated);
};

/**
 * @param {User} user
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });

  const newUser = await res.json();
  console.log({ newUser });

  return newUser;
};

/**
 * @param {User} user
 */
const updateUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });

  const updatedUser = await res.json();
  console.log({ updatedUser });

  return updatedUser;
};
