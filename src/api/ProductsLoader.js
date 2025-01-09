import { BACK_END_URL } from "../constants/api";

export function ProductsLoader() {
  return fetch(`${BACK_END_URL}/products`);
}
