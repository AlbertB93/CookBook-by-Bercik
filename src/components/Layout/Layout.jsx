import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";

import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <MainContent>
        <TopBar></TopBar>

        <Outlet></Outlet>
      </MainContent>
      <Footer></Footer>
    </>
  );
}
