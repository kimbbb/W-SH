import { useState } from "react";
import * as L from "../../style/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import lbg from "../../images/login.png"

function Login() {
  let navigate=useNavigate();
  let [id, setId]=useState();
  let [password, setPassword]=useState();
  return (
    <L.bg>
      <L.bimg src={lbg}/>
      <L.box>
        <L.user>
          <L.logo>LOGIN</L.logo>
          <L.id placeholder="아이디" onChange={(e)=>{setId(e.target.value)}}/>
          <L.id placeholder="비밀번호" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <L.go onClick={()=>{
            console.log(id, password)
            axios
              .post('/', { id: id, password: password })
              .then((result) => {navigate("/main")})
              .catch((result)=>{alert('로그인에 실패하셨습니다 😥')});
            }}>Login</L.go>
          <L.nav>아직 회원가입 전이라면? <L.a href="/sign">회원가입</L.a></L.nav>
        </L.user>
      </L.box>
    </L.bg>
  );
}

export default Login;