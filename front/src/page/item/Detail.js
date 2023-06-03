import * as C from "../../style/list.js"
import $ from "jquery"
import axios from "axios";
import { useLocation , useNavigate} from "react-router-dom";

function Detail(title, cash, percent) {

  const location = useLocation();
  const navigate = useNavigate();

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
            <C.del onClick={()=>{
              const title=location.state.id
              axios
              .delete(`http://localhost:8081/board/title/${title}`)
              .then(()=>{alert('위시가 삭제되었습니다😄'); close()})
            }
            }>Delete</C.del>
          </C.blist>
        </C.dbottom>
      </C.detail>
    </C.detailbox>
    </>
  )
}

export default Detail;