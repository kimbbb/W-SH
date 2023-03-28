import styled from "styled-components";

export const bgbox = styled.div`
  width:1000px;
  height:700px;
  background-color:#fffc;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  border-radius:30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`

export const box=styled.div`
  width:950px;
  height:650px;
  background-color:#EFEFEF;
  border-radius:30px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`

export const header=styled.div`
  width:950px;
  height:100px;
  border-bottom:1px solid #000;
  display:flex;
  align-items:center;
  padding-left:50px;
  font-size:28px;
  font-weight:600;
`
export const sbox=styled.div`
  width:100%;
  height:550px;
  display:flex;
`

export const left=styled.div`
  width:36%;
  height:100%;
  position: relative;
`

export const imguplode=styled.div`
  width:288px;
  height:310px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color:#fff;
  border:none;
  position:absolute;
  right:0%;
  top:40%;
  transform:translate(0%,-50%);
  border-radius:10px;
`

export const addtext = styled.p`
  color:#c9c9c9;
`

export const preview = styled.img`
  max-width:100%;
  max-height:100%;
`

export const fileuplode=styled.input`
  display:none;
`


export const right=styled.div`
  width:64%;
  height:100%;
`

export const rbox=styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  top: 50%;
  right: 50px;
  transform: translate(0%, -40%);
`

export const title=styled.input`
  width:500px;
  height:60px;
  border-radius:10px;
  padding:20px;
  border:none;
  margin-bottom:24px;
  &:focus{
    outline:none;
    background-color:#ECF3FD;
  }
`

export const op=styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  width:500px;
  height:60px;
  border-radius:10px;
  padding:0px 20px;
  background-color:#fff;
  margin-bottom:24px;
`

export const select = styled.select`
  display:flex;
  align-items:center;
  width:400px;
  height:40px;
  background-color:#ECF3FD;
  border-radius:10px;
  border:none;
`

export const item = styled.option`
  text-align:center;
`

export const need = styled.input`
  display:flex;
  align-items:center;
  text-align:center;
  width:400px;
  height:40px;
  background-color:#ECF3FD;
  border-radius:10px;
  border:none;
  &:focus{
    outline:none;
  }
`
export const push = styled.button`
  width:150px;
  height:70px;
  background-color:#3183FF;
  color:#fff;
  border:none;
  border-radius:20px;
  margin-left:350px;
  font-size:18px;
  &:focus{
    outline:4px solid #AECFFF;
  }
`
//300px /288px
