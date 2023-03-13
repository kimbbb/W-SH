import * as L from "../../style/login";
import { useNavigate } from "react-router-dom";

function Sign() {
  let navigate=useNavigate();
  return (
    <L.bg>
      <L.box>
        <L.user>
          <L.logo>SIGN UP</L.logo>
          <L.id placeholder="아이디"/>
          <L.id placeholder="비밀번호"/>
          <L.go onClick={()=>{navigate('/')}}>Sign up</L.go>
          <L.nav>이미 회원이라면? <L.a href="/">로그인</L.a></L.nav>
        </L.user>
      </L.box>
    </L.bg>
  );
}

export default Sign;