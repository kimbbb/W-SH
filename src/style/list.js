import styled from "styled-components"

export const cardbox = styled.div`
  position: absolute;
  top: 10%;
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
  margin:20px ;
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