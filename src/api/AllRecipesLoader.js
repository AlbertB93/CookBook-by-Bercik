import { BACK_END_URL } from "../constants/api";

export function AllRecipesLoader() {
  return fetch(`${BACK_END_URL}/recipes`);
}
