import * as N from "../../style/new.js"
import Header from "../components/Header.js";


function New(){
  return(
    <>
      <Header/>
      <N.bgbox>
        <N.box>
          <N.header>CREATE WISHLIST</N.header>
          <N.sbox>
            <N.left>
              <N.imguplode/>
            </N.left>
            <N.right>
              <N.rbox>
                <N.title placeholder="제목"/>
                <N.title placeholder="가격" type='number'/>
                <N.op>상태
                  <N.select>
                    <N.item>필요한 것</N.item>
                    <N.item>갖고싶은 것</N.item>
                    <N.item>관심있는 것</N.item>
                  </N.select>
                </N.op>

                <N.op>필요도
                  <N.need placeholder="필요도를 설정해주세요" type='number'></N.need>
                </N.op>

                <N.push>Send</N.push>
              </N.rbox>
            </N.right>
          </N.sbox>
        </N.box>
      </N.bgbox>
    </>
  );
}

export default New;