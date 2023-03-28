import * as M from "../../style/main.js"
import Header from "../components/Header.js"
import Button from "../components/Button.js";
import Footer from "../components/Footer.js"
import { useNavigate } from "react-router-dom";


function Main() {

  let navigate = ''

  return (    
    <>
      <Header/>
      <M.carousel/>
      <M.box>
        <M.banner onClick={()=>window.open(navigate, '_blank')}/>
        <M.gide/>
      </M.box>
      <Footer/>
      <Button/>
    </>
  );
}

export default Main;