import { redirect } from "react-router-dom";
import {
  BACK_END_URL,
  PATH_CALORIES_TO_ENDPOINT_MAPPING,
} from "../constants/api";

export function GroupOfCaloriesLoader({ params }) {
  console.log("Co jest? calories " + params.groupOfCalories);
  const backEndPath = PATH_CALORIES_TO_ENDPOINT_MAPPING[params.groupOfCalories];
  console.log("Co jest? " + backEndPath);

  if (backEndPath) {
    console.log("OK CALORIES: " + backEndPath);
    return fetch(`${BACK_END_URL}/recipes?groupOfCalories=${backEndPath}`);
  } else {
    console.log("Błąd CALORIES: " + backEndPath);
    return redirect("/przepisy");
  }
}
