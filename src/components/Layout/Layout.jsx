import { MainPage } from "../../views/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <TopBar></TopBar>
      <MainPage> </MainPage>
      <Footer></Footer>
    </>
  );
}
