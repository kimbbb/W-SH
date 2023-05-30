import { useState } from "react";
import * as N from "../../style/new.js"
import Header from "../components/Header.js";
import $ from "jquery"
import { useNavigation } from "react-router-dom";
import axios from "axios";


function New(){

  let navigate = useNavigation

  const[imgSrc, setImgSrc]=useState('');
  const [title, setTitle]=useState();
  const [cash, setCash]=useState();
  const [state, setState]=useState('필요한 것');
  const [need, setNeed]=useState();


  const preview = (file)=>{
    const render = new FileReader();
    render.readAsDataURL(file);
    return new Promise((resolve)=>{
      render.onload=()=>{
        setImgSrc(render.result);
        resolve();
      };
    });
  };

  if(imgSrc!=''){
    $('#add').css('display', 'none')
  }


  return(
    <>
      <Header/>
      <N.bgbox>
        <N.box>
          <N.header>CREATE WISHLIST</N.header>
          <N.sbox>
            <N.left>
              <N.imguplode id='preview' onClick={()=>{
                  $('#file').click();
                }}>
                  {imgSrc && <N.preview src={imgSrc} alt='preview-img'/>}
                  <N.addtext id='add'>사진 추가</N.addtext>
              </N.imguplode>
                <N.fileuplode id="file" type='file' accept="image/*" onChange={(e)=>{preview(e.target.files[0])}}/>
            </N.left>
            <N.right>
              <N.rbox>
                <N.title placeholder="제목" onChange={(e)=>{setTitle(e.target.value)}}/>
                <N.title placeholder="가격" type='number' min="1" onChange={(e)=>{setCash(e.target.value)}}/>
                <N.op>상태
                  <N.select onChange={(e)=>{setState(e.target.value)}}>
                    <N.item>필요한 것</N.item>
                    <N.item>갖고싶은 것</N.item>
                    <N.item>관심있는 것</N.item>
                  </N.select>
                </N.op>

                <N.op>필요도
                  <N.need placeholder="필요도를 설정해주세요" type='number' min="1" onChange={(e)=>{setNeed(e.target.value)}}></N.need>
                </N.op>

                <N.push  onClick={()=>{
                  axios
                  .post('', { title:title, cash:cash, state:state, need:need, img:imgSrc })
                  .then((result) => {navigate("/list")})
                  .catch((result)=>{alert('위시 생성을 실패하셨습니다 😥')});
                  console.log(title, cash, state, need)
                  console.log(imgSrc)
                  
                }}>Send</N.push>
              </N.rbox>
            </N.right>
          </N.sbox>
        </N.box>
      </N.bgbox>
    </>
  );
}

export default New;