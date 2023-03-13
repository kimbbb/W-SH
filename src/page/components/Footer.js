import "../../style/header.css";
import Fimg from "../../images/footer.png";

function Footer(){
  return(
    <div className='footer'>
      <img className='f-img' src={Fimg}/>
    </div>
  );
}

export default Footer;