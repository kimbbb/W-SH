import * as M from "../../style/main.js"
import Header from "../components/Header.js"
import Button from "../components/Button.js";
import Footer from "../components/Footer.js"
import { useNavigate } from "react-router-dom";
import cimg from "../../images/carousel.png";
import gimg from "../../images/gide.png"
import bimg from "../../images/banner.png"

function Main() {

  let navigate = 'https://boom-repair-1d9.notion.site/W-SH-346a43ffec4f4ca3be419753355c0fed'

  return (    
    <>
      <Header/>
      <M.mainbox>
        <M.carousel>
          <M.carouselimg src={cimg}/>
        </M.carousel>
        <M.box>
          <M.banner onClick={()=>window.open(navigate, '_blank')}>
            <M.bnnerimg src={bimg}/>
          </M.banner>
          <M.gide>
            <M.gideimg src={gimg}/>
          </M.gide>
        </M.box>
        <Footer/>
      </M.mainbox>
      <Button/>
    </>
  );
}

export default Main;