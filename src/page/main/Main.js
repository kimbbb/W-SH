import * as M from "../../style/main.js"
import Header from "../components/Header.js"
import Button from "../components/Button.js";
import Footer from "../components/Footer.js"


function Main() {
  return (
    <>
      <Header/>
      <M.carousel/>
      <M.box>
        <M.banner/>
        <M.gide/>
      </M.box>
      <Footer/>
      <Button/>
    </>
  );
}

export default Main;