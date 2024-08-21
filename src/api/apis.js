import { BASE_URL } from "./constants";

export const apis = {
  auth: {
    login: `${BASE_URL}/users/login`,
    register: `${BASE_URL}/users/register`
  },
  spaces: {
    spacesByFloor: `${BASE_URL}/spaces/floor/`,
  }

}