import styled from "styled-components"
import Close from "../images/close.png"

export const light = styled.img`
  width:150px;
  position:absolute;
  top:12%;
  right:15%;
`

export const cardbox = styled.div`
  position: absolute;
  top: 20%;
  left: 51%;
  transform: translate(-50%, 0%);
  width: 70%;
  height: 80%;
  overflow:auto;
  &::-webkit-scrollbar {
    width: 14px;
    height: 10px;
    border-radius: 10px;
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #AECFFF;
    border-radius: 10px;
    height: 30%;
  }
`

export const card = styled.div`
  width:220px;
  height:280px;
  float:left;
  background-color:#fff;
  border-radius:10px;
  margin:20px 0px 20px 40px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.08));
`

export const top=styled.div`
  background-color:#EAE9E9;
  height:140px;
  width:100%;
  border-radius:10px 10px 0px 0px;
`

export const bottom=styled.div`
  width:100%;
  height:140px;
  padding:10px;
`

export const titlebox=styled.div`
  display:flex;
  align-items:center;
`

export const title=styled.h4`
 margin:0px 6px 0px 0px;
`

export const state=styled.div`
  width: 20px;
  height: 20px;
  background-color:#AECFFF;
  border-radius:20px;
`

export const cash=styled.p`
  color:#828282;
  margin-top:6px;
  margin-bottom:10px;
`

export const detailbtn=styled.button`
  width:90px;
  height:40px;
  background-color:#3183FF;
  border:none;
  border-radius:10px;
  margin-left: 54%;
  color:#fff;
  font-weight:600;
`

export const detailbox=styled.div`
  width:100%;
  height:93.4vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  position:absolute;
  bottom:0%;
  display:none;
`

export const detail = styled.div`
  width:30%;
  height:72%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  background-color:#fff;
  border-radius:20px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`

export const header=styled.div`
  width:100%;
  height:14%;
  border-bottom:1px solid #000;
  display: flex;
  align-items:center;
  justify-content:space-between;
`

export const headtitle = styled.div`
  display: flex;
  font-size: 22px;
  margin: 20px;
  align-items: center;
`

export const headcolor = styled.div`
  width:22px;
  height:22px;
  border-radius:100%;
  background-color:#AECFFF;
  margin-left:8px;
`

export const closebtn = styled.button`
  background-image:url(${Close}); 
  width:30px;
  height:30px;
  border:none;
  background-color:rgba(255,255,255,0);
  margin: 20px;
`

export const dbottom = styled.div`
  width:100%;
  height:86%;
  position: relative;
`

export const blist = styled.div`
  width:80%;
  height:90%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`

export const saleimg = styled.div`
  width:100%;
  height:60%;
  background-color:#EDEDED;
  border-radius:10px;
`

export const headlist = styled.div`
  display:flex;
  width:100%;
  height:14%;
  justify-content: space-between;
  margin-top:30px;
`

export const headcash = styled.div`
  width:40%;
  height:100%;
  background-color:#EDEDED;
  color:#828282;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
`
export const headneed = styled.div`
  width:55%;
  height:100%;
  background-color:#EDEDED;
  color:#828282;
  border-radius:10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const percentage = styled.div`
  width:70%;
  height:6px;
  border-radius:10px;
  background-color: #D9D9D9;
  margin-left:10px;
`

export const percent = styled.div`
  width:80%;
  height:100%;
  background-color:#80B2FF;
  border-radius:10px;
`

export const del = styled.div`
  width:34%;
  height:12%;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:18px;
  margin-top:20px;
  background-color:#3183FF;
  border-radius:10px;
  position:absolute;
  bottom:0%;
  right:0%;
`
