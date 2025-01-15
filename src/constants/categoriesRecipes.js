export const FILTERRECIPES = [
  {
    filterName: "Wybierz grupę przepisu",
    path: "podzial-na-grupy",
    groupOfRecipe: [
      { id: 1, name: "wszystkie", path: "" },
      { id: 2, name: "śniadanie", path: "sniadanie" },
      { id: 3, name: "obiad", path: "obiad" },
      { id: 4, name: "kolacja", path: "kolacja" },
      { id: 5, name: "deser", path: "deser" },
      { id: 6, name: "święta", path: "swieta" },
      { id: 7, name: "fit fastfood", path: "fit-fastfood" },
    ],
  },
  {
    filterName: "Wybierz kaloryczność przepisu",
    path: "podzial-na-kalorie",
    groupOfRecipe: [
      { id: 1, name: "mało kaloryczne ( do 300 kcal )" },
      { id: 2, name: "mało kaloryczne ( do 500 kcal )" },
      { id: 3, name: "mało kaloryczne ( do 700 kcal )" },
      { id: 4, name: "mało kaloryczne ( powyżej 700 kcal )" },
    ],
  },
  {
    filterName: "Wybierz grupę składników",
    path: "podzial-na-skladniki",
    groupOfRecipe: [
      { id: 1, name: "warzywa" },
      { id: 2, name: "owoce" },
      { id: 3, name: "nabiał" },
      { id: 4, name: "pieczywo" },
    ],
  },
];
