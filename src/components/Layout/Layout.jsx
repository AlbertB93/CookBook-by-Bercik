import { Outlet } from "react-router-dom";
import { DailyMenu } from "../DailyMenu/DailyMenu";
import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <MainContent>
        <TopBar></TopBar>
        <MainMenu></MainMenu>
        <DailyMenu></DailyMenu>
        <Outlet></Outlet>
      </MainContent>
      <Footer></Footer>
    </>
  );
}
