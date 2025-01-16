import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_GROUP_TO_ENDPOINT_MAPPING } from "../constants/api";

export function GroupOfRecipesLoader({ params }) {
  console.log("Co jest? " + params.group);
  const backEndPath = PATH_GROUP_TO_ENDPOINT_MAPPING[params.group];
  console.log("Co jest? " + backEndPath);
  if (backEndPath) {
    console.log("OK: " + backEndPath);
    return fetch(`${BACK_END_URL}/recipes?group=${backEndPath}`);
  } else {
    console.log("Błąd: " + backEndPath);
    return redirect("/przepisy");
  }
}
