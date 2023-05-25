import styled from "styled-components"
import lbg from "../images/login.png"

export const bg=styled.div`
  background-image:url(${lbg});
  width:100%;
  height:100vh;
`

export const box=styled.div`
  width:500px;
  height:600px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius:30px;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
`

export const logo=styled.div`
  color:#3183FF;
  font-size:30px;
  text-align:center;
  margin-bottom:40px;
`

export const user=styled.div`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
`
export const id=styled.input`
  background: rgba(255, 255, 255, 0.8);
  font-size:14px;
  width:300px;
  height:50px;
  padding:20px;
  border:none;
  border-radius:15px;
  margin-bottom:20px;
  &:focus{
    outline:none;
    color:#3183FF;
    background-color:#fff;
  }
`
export const go=styled.button`
  width:300px;
  height: 60px;
  background-color:#3183FF;
  margin-top:20px;
  border:none;
  border-radius:15px;
  color:#fff;
  font-size:20px;
  &:focus{
    background-color:#AECFFF;
  }
`

export const nav=styled.p`
  color:#828282;
  font-size:12px;
  margin-top:4px;
`
export const a=styled.a`
  text-decoration:none;
  color:#3183FF;
`