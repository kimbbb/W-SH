import Header from '../components/Header.js';
import * as C from "../../style/list.js"

function List(){
  return(
    <>
    <Header/>
    <C.cardbox>
      <C.card>
        <C.top/>
        <C.bottom>
          <C.titlebox>
            <C.title>상품명</C.title>
            <C.state/>
          </C.titlebox>
          <C.cash>₩ 가격</C.cash>
          <C.detailbtn>GO</C.detailbtn>
        </C.bottom>
      </C.card>

      <C.card>
        <C.top/>
        <C.bottom>
          <C.titlebox>
            <C.title>상품명</C.title>
            <C.state/>
          </C.titlebox>
          <C.cash>₩ 가격</C.cash>
          <C.detailbtn>GO</C.detailbtn>
        </C.bottom>
      </C.card>

      <C.card>
        <C.top/>
        <C.bottom>
          <C.titlebox>
            <C.title>상품명</C.title>
            <C.state/>
          </C.titlebox>
          <C.cash>₩ 가격</C.cash>
          <C.detailbtn>GO</C.detailbtn>
        </C.bottom>
      </C.card>
    </C.cardbox>
    </>
  )
}

export default List;