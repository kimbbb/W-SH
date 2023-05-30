import Header from '../components/Header.js';
import * as C from "../../style/list.js"
import Button from "../components/Button"
import $ from "jquery"
import lightimg from "../../images/light.png"
import Detail from "./Detail.js"

function List(){
  const need = 50

  function open(){
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
            <C.title id='title'>상품명</C.title>
            <C.state/>
          </C.titlebox>
          <C.cash id='cash'>가격</C.cash>
          <C.detailbtn onClick={()=>{
            const title = document.getElementById('title').innerText
            const cash = document.getElementById('cash').innerText
            Detail(title, cash, need )
            open()
          }}>GO</C.detailbtn>
        </C.bottom>
      </C.card>
      
    </C.cardbox>

    <Detail/>
    </>

  )

}

export default List;