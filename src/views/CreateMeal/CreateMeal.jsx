import { useState } from "react";
import { useGetData } from "../../hooks/useGetData.js";
import styles from "./CreateMeal.module.css";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { ButtonSmall } from "../../components/ButtonSmall/ButtonSmall.jsx";
import { NewMealComposition } from "../../components/NewMealComposition/NewMealComposition";
import { Select } from "../../components/Select/Select.jsx";
import { Form } from "../../components/Forms/Form.jsx";
import { IngredientWeight } from "../../components/IngredientWeight/IngredientWeight.jsx";

export function CreateMeal() {
  const [showIngredientsBox, setShowIngredientsBox] = useState(true);
  const [showIngredientWeight, setShowIngredientWeight] = useState(false);
  const [showNewIngredint, setshowNewIngredint] = useState(false);
  const [numberOfGrams, setNumberOfGrams] = useState();
  const [numberOfPieces, setNumberOfPieces] = useState(null);

  const { data: ingredients, error } = useGetData("/db/ingredients.json");

  const [listOfIngredients, setListOfIngredients] = useState([]);
  const [valuesOfMeal, setValuesOfMeal] = useState({
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
  });
  const [titleMyMeal, setTitleMyMeal] = useState("");
  const [activeIngredient, setActiveIngredient] = useState({
    name: "",
    img: "",
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
    weight: 100,
  });

  /* Filtry*/
  const [inputValue, setInputValue] = useState("");

  const [filter, setFilter] = useState("Wszystkie");
  const filteredIngredients =
    filter === "Wszystkie"
      ? ingredients
      : ingredients.filter((ingredient) => ingredient.group === filter);

  /* Funkcje */

  function handleAddToDay(titleMyMeal, kcal, fats, carbons, proteins) {
    const imgUrl = "./felek.png";
    let idMyMeal = Math.random();
    addToDailyMenu(
      idMyMeal,
      titleMyMeal,
      imgUrl,
      kcal,
      fats,
      carbons,
      proteins
    );

    setListOfIngredients([]);
    setTitleMyMeal("");
  }

  function eventHandlerDeleteIngredient(id, kcal, fats, carbons, proteins) {
    setListOfIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== id)
    );

    setValuesOfMeal((prevState) => {
      prevState.kcal -= kcal;
      prevState.fats -= fats;
      prevState.carbons -= carbons;
      prevState.proteins -= proteins;
      return { ...prevState };
    });
  }

  function handleActiveIngredient(
    name,
    img,
    kcal,
    fats,
    carbons,
    proteins,
    weight
  ) {
    setShowIngredientWeight((prevState) => !prevState);
    setShowIngredientsBox((prevState) => !prevState);
    setActiveIngredient({ name, img, kcal, fats, carbons, proteins, weight });
  }

  function eventHandlerSetValuesOfMeal(
    name,
    img,
    kcal,
    fats,
    carbons,
    proteins,
    weight
  ) {
    if (numberOfPieces !== null) {
      setValuesOfMeal((prevState) => {
        (prevState.kcal += Math.round(
          kcal * ((numberOfPieces * weight) / 100)
        )),
          (prevState.fats += Math.round(
            fats * ((numberOfPieces * weight) / 100)
          )),
          (prevState.carbons += Math.round(
            carbons * ((numberOfPieces * weight) / 100)
          )),
          (prevState.proteins += Math.round(
            proteins * ((numberOfPieces * weight) / 100)
          ));

        return { ...prevState };
      });
      setListOfIngredients((prevState) => {
        return [
          ...prevState,
          {
            id: Math.random(),
            title: name,
            img: img,
            kcal: Math.round(kcal * ((numberOfPieces * weight) / 100)),
            fats: Math.round(fats * ((numberOfPieces * weight) / 100)),
            carbons: Math.round(carbons * ((numberOfPieces * weight) / 100)),
            proteins: Math.round(proteins * ((numberOfPieces * weight) / 100)),
            weight: Math.round(numberOfPieces * weight),
          },
        ];
      });
      setNumberOfPieces(null);
    } else {
      setValuesOfMeal((prevState) => {
        (prevState.kcal += Math.round(kcal * (numberOfGrams / 100))),
          (prevState.fats += Math.round(fats * (numberOfGrams / 100))),
          (prevState.carbons += Math.round(carbons * (numberOfGrams / 100))),
          (prevState.proteins += Math.round(proteins * (numberOfGrams / 100)));

        return { ...prevState };
      });
      setListOfIngredients((prevState) => {
        return [
          ...prevState,
          {
            title: name,
            img: img,
            kcal: Math.round(kcal * (numberOfGrams / 100)),
            fats: Math.round(fats * (numberOfGrams / 100)),
            carbons: Math.round(carbons * (numberOfGrams / 100)),
            proteins: Math.round(proteins * (numberOfGrams / 100)),
            weight: numberOfGrams,
          },
        ];
      });
    }

    setShowIngredientsBox((prevState) => !prevState);
    setShowIngredientWeight((prevState) => !prevState);
  }

  return (
    <ContentWrapper>
      <div className={styles.newMeal}>
        {showIngredientWeight && (
          <IngredientWeight
            activeIngredient={activeIngredient}
            eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
            setNumberOfPieces={setNumberOfPieces}
            setNumberOfGrams={setNumberOfGrams}
            setShowIngredientsBox={setShowIngredientsBox}
            setShowIngredientWeight={setShowIngredientWeight}
          />
        )}

        {showNewIngredint && (
          <NewIngredient
            setShowIngredientsBox={setShowIngredientsBox}
            setshowNewIngredint={setshowNewIngredint}
            ingredients={ingredients}
          />
        )}

        <NewMealComposition
          listOfIngredients={listOfIngredients}
          valuesOfMeal={valuesOfMeal}
          handleAddToDay={handleAddToDay}
          eventHandlerDeleteIngredient={eventHandlerDeleteIngredient}
          titleMyMeal={titleMyMeal}
          setTitleMyMeal={setTitleMyMeal}
        ></NewMealComposition>
        <div
          className={
            showIngredientsBox
              ? `${styles.ingredientsContent}`
              : `${styles.ingredientsContent} ${styles.onBlur}`
          }
        >
          <div className={styles.selectBox}>
            <Select filter={filter} setFilter={setFilter}>
              Wybierz grupę składników:
            </Select>
            <Form inputValue={inputValue} setInputValue={setInputValue}>
              Wyszukaj składnik:{" "}
            </Form>
          </div>
          <div className={styles.ingredientsBox}>
            {error ? (
              <span>{error.message}</span>
            ) : (
              filteredIngredients
                .filter((ingredient) => ingredient.name.includes(inputValue))
                .map(
                  ({
                    id,
                    name,
                    image,
                    kcal,
                    fats,
                    carbons,
                    proteins,
                    weight,
                  }) => (
                    <div key={id} className={styles.ingredient}>
                      <div className={styles.ingredientHeader}>
                        <p className={styles.ingredientName}>{name}</p>
                        <ButtonSmall
                          onClick={() =>
                            handleActiveIngredient(
                              name,
                              image,
                              kcal,
                              fats,
                              carbons,
                              proteins,
                              weight
                            )
                          }
                        >
                          +
                        </ButtonSmall>
                      </div>
                      <div className={styles.imgContainer}>
                        <img
                          src={image}
                          alt="FOTKA"
                          className={styles.imgFile}
                        />
                      </div>
                      <div className={styles.ingredientValues}>
                        <p>{kcal} kcal. </p>
                        <p>T: {fats}g. </p>
                        <p>W: {carbons}g.</p>
                        <p>B: {proteins} g.</p>
                      </div>
                    </div>
                  )
                )
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
