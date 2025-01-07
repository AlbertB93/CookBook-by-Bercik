import { AllRecipes } from "../../views/AllRecipes/AllRecipes";
import { MainPage } from "../../views/MainPage/MainPage";
import { DailyMenu } from "../DailyMenu/DailyMenu";

import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout({ children }) {
  return (
    <>
      <MainContent>
        <TopBar></TopBar>
        <MainMenu></MainMenu>
        <DailyMenu></DailyMenu>
        {children}
      </MainContent>
      <Footer></Footer>
    </>
  );
}
