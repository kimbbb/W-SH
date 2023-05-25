import * as M from "../../style/main.js"
import Header from "../components/Header.js"
import Button from "../components/Button.js";
import Footer from "../components/Footer.js"
import { useNavigate } from "react-router-dom";


function Main() {

  let navigate = 'https://boom-repair-1d9.notion.site/W-SH-346a43ffec4f4ca3be419753355c0fed'

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