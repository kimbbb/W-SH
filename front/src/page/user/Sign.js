import { useEffect, useState } from "react";
import * as L from "../../style/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Sign() {
  let navigate=useNavigate();

  let [selected, setSelected]=useState("");
  let [id, setId]=useState();
  let [password, setPassword]=useState();

  useEffect(()=>{
    console.log(selected);
  }, [selected])

  return (
    <L.bg>
      <L.box>
        <L.user>
          <L.logo>SIGN UP</L.logo>
          <L.id placeholder="아이디" onChange={(e)=>{setId(e.target.value)}}/>
          <L.id type="password" placeholder="비밀번호" onChange={(e)=>{setPassword(e.target.value)}}/>
          <L.go onClick={()=>{
            axios
            .post('/', {id:id, password:password, type:selected})
            .then((result)=>{navigate("/")})
            .catch(()=>{alert('회원가입에 실패하셨습니다😥')})
          }}>Sign up</L.go>
          <L.nav>이미 회원이라면? <L.a href="/">로그인</L.a></L.nav>
        </L.user>
      </L.box>
    </L.bg>
  );
}

export default Sign;