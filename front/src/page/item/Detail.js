import * as C from "../../style/list.js"
import $ from "jquery"

function Detail(title, cash, percent) {

  function close(){
    $('#modal').css('display', 'none')
  }

  $('#wish').text(title)
  $('#monnay').text(`₩ ${cash}`)
  $('#per').text(percent)
  $('#percent').css('width', `${percent}%`)

  return(
    <>
     <C.detailbox id='modal' onClick={()=>{close()}}>
      <C.detail>
        <C.header>
          <C.headtitle>
            <C.headname id='wish'>WISHLIST 제목</C.headname>
            <C.headcolor/>
          </C.headtitle>
          <C.closebtn onClick={()=>{close()}}/>
        </C.header>

        <C.dbottom>
          <C.blist>
            <C.saleimg/>
            <C.headlist>
              <C.headcash id='monnay'>18510</C.headcash>
              <C.headneed>
                <C.percenttext id='per'>80</C.percenttext>
                <C.percentage>
                  <C.percent id='percent'/>
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