import * as C from "../../style/list.js"
import $ from "jquery"

function Detail() {

  function close(){
    $('#modal').css('display', 'none')
  }

  return(
    <>
     <C.detailbox id='modal' onClick={()=>{close()}}>
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
            <C.del onClick={()=>{}}>Delete</C.del>
          </C.blist>
        </C.dbottom>
      </C.detail>
    </C.detailbox>
    </>
  )
}

export default Detail;