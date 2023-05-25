import styled from "styled-components";
import wish from "../../images/wish.png"
import hover from "../../images/hover.png"
import { useNavigate } from "react-router-dom";

const BtnBox=styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  &:hover .hover{
    display:block;
  }
`

const Btn=styled.button`
  background-image:url(${wish});
  background-color: #fff0;
  width: 110px;
  height: 110px;
  border: none;
`

const Hover=styled.img`
  position: absolute;
  right: 100%;
  top: 30%;
  display:none;
  height: 40px;
`

function Button() {

  let navigate=useNavigate();

  return(
    <>
    <BtnBox onClick={()=>{navigate('/new')}}>
      <Btn/>
      <Hover className='hover' src={hover}/>
    </BtnBox>
    </>
  )
}

export default Button;