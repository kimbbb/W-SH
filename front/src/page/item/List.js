import Header from "../components/Header.js";
import * as C from "../../style/list.js";
import Button from "../components/Button";
import $ from "jquery";
import lightimg from "../../images/light.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function List() {
  const location = useLocation();

  function close() {
    $("#modal").css("display", "none");
  }

  function open() {
    $("#modal").css("display", "block");
  }

  const [object, setObject] = useState([]);

  const getBoard = async () => {
    await axios
      .get("http://localhost:8081/board")
      .then((res) => {
        let temp = res.data.data;
        setObject([...temp]);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getBoard();
  }, []);

  let [title, setTitle] = useState();
  let [cash, setCash] = useState();
  let [state, setState] = useState();
  let [need, setNeed] = useState();
  let [img, setImg] = useState();

  if (state === "갖고싶은 것") {
    $("#detail-state").css("background-color", "#96E7A8");
  } else if (state === "필요한 것") {
    $("#detail-state").css("background-color", "#FFAEAE");
  } else if (state === "관심있는 것") {
    $("#detail-state").css("background-color", "#AECFFF");
  }

  $("#percent").css("width", `${need}%`);

  return (
    <>
      <Header />
      <Button />

      <C.light src={lightimg} />

      {/* 리스트 */}
      <C.cardbox>
        {object.map(function (board, i) {
          return (
            <C.card>
              <C.top>
                <C.topimg src={board.img} />
              </C.top>
              <C.bottom>
                <C.titlebox>
                  <C.title id="title">{board.title}</C.title>
                </C.titlebox>
                <C.cash id="cash">₩ {board.cash}</C.cash>
                <C.detailbtn
                  onClick={() => {
                    setTitle(board.title);
                    setCash(board.cash);
                    setState(board.state);
                    setNeed(board.need);
                    setImg(board.img);
                    open();
                  }}>
                  GO
                </C.detailbtn>
              </C.bottom>
            </C.card>
          );
        })}
      </C.cardbox>
      

      {/* 디테일 */}
      <C.detailbox
        id="modal"
        onClick={() => {
          close();
        }}>
        <C.detail>
          <C.header>
            <C.headtitle>
              <C.headname id="wish">{title}</C.headname>
              <C.headcolor id="detail-state" value={state} />
            </C.headtitle>
            <C.closebtn
              onClick={() => {
                close();
              }}
            />
          </C.header>

          <C.dbottom>
            <C.blist>
              <C.saleimg>
                <C.sale src={img} />
              </C.saleimg>
              <C.headlist>
                <C.headcash id="monnay">₩ {cash}</C.headcash>
                <C.headneed>
                  <C.percenttext id="per">{need}</C.percenttext>
                  <C.percentage>
                    <C.percent id="percent" />
                  </C.percentage>
                </C.headneed>
              </C.headlist>
              <C.del
                onClick={() => {
                  const title = location.state.id;
                  axios
                    .delete(`http://localhost:8081/board/title/${title}`)
                    .then(() => {
                      alert("위시가 삭제되었습니다😄");
                      close();
                    });
                }}>
                Delete
              </C.del>
            </C.blist>
          </C.dbottom>
        </C.detail>
      </C.detailbox>
    </>
  );
}

export default List;
