import Header from '../components/Header.js';
import * as C from "../../style/list.js"
import Button from "../components/Button"
import $ from "jquery"
import lightimg from "../../images/light.png"
import Detail from "./Detail.js"

function List(){

  function detail(){
    $('#modal').css('display', 'block')
  }

  return(
    <>
    <Header/>
    <Button/>
    <C.light src={lightimg}/>
    <C.cardbox>
      <C.card>
        <C.top/>
        <C.bottom>
          <C.titlebox>
            <C.title>상품명</C.title>
            <C.state/>
          </C.titlebox>
          <C.cash>₩ 가격</C.cash>
          <C.detailbtn onClick={()=>{detail()}}>GO</C.detailbtn>
        </C.bottom>
      </C.card>
    </C.cardbox>

    <Detail/>
    </>
  )
}

export default List;