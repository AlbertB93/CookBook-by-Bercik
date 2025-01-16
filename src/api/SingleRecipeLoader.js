import { BACK_END_URL } from "../constants/api";

export function SingleRecipeLoader({ params }) {
  return fetch(`${BACK_END_URL}/recipes?id=${params.id}`);
}
