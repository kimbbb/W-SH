import Header from '../components/Header.js';
import * as C from "../../style/list.js"
import Button from "../components/Button"
import $ from "jquery"
import lightimg from "../../images/light.png"

function List(){

  function detail(){
    $('#modal').css('display', 'block')
  }

  function close(){
    $('#modal').css('display', 'none')
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


  {/* 상세보기 */}
    <C.detailbox id='modal'>
      <C.detail>
        <C.header>
          <C.headtitle>WISHLIST 제목
            <C.headcolor/>
          </C.headtitle>
          <C.closebtn onClick={()=>{close()}}/>
        </C.header>

        <C.dbottom>
          <C.blist>
            <C.saleimg/>
            <C.headlist>
              <C.headcash>₩ 18510</C.headcash>
              <C.headneed>
                80
                <C.percentage>
                  <C.percent/>
                </C.percentage>
              </C.headneed>
            </C.headlist>
            <C.del>Delete</C.del>
          </C.blist>
        </C.dbottom>
      </C.detail>
    </C.detailbox>
    </>
  )
}

export default List;