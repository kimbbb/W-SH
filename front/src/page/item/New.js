import { useState } from "react";
import * as N from "../../style/new.js"
import Header from "../components/Header.js";
import $ from "jquery"
import { useNavigate } from "react-router-dom";
import axios from "axios";


function New(){

  let navigate=useNavigate();

  const[previewImgSrc, setPreviewImgSrc]=useState('');
  const [imgSrc, setImgSrc] = useState()
  const [title, setTitle]=useState('');
  const [cash, setCash]=useState();
  const [state, setState]=useState('필요한 것');
  const [need, setNeed]=useState();


  const preview = (file)=>{
    const render = new FileReader();
    render.readAsDataURL(file);
    return new Promise((resolve)=>{
      render.onload=()=>{
        setPreviewImgSrc(render.result);
        setImgSrc(file)
        resolve();
      };
    });
  };


  if(previewImgSrc!=''){
    $('#add').css('display', 'none')
  }

  const upload = ()=>{
    const form = new FormData();
    console.log(imgSrc)
    form.append("img", imgSrc);
    for (let key of form.keys()) {
      console.log(key, ":", form.get(key));
    }

    axios.post("http://localhost:8081/board/upload/img", form, {"Content-Type": "multipart/form-data"})
      .then(response => {
        console.log(response)

        axios.post('http://localhost:8081/board', {title:title, cash:cash, state:state, need:need, img:response.data.url})
        .then((res)=>{navigate('/list')})
        .catch((res)=>{alert('위시 생성에 실패하였습니다 😥')})

      })
      .catch(error => console.log('error', error));
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
                  {previewImgSrc && <N.preview src={previewImgSrc} alt='preview-img'/>}
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
                  <N.need placeholder="필요도를 설정해주세요" type='number' min="1" max="100" onChange={(e)=>{setNeed(e.target.value)}}></N.need>
                </N.op>
                <N.push  onClick={()=>{upload();}}>Send</N.push>
              </N.rbox>
            </N.right>
          </N.sbox>
        </N.box>
      </N.bgbox>
    </>
  );
}

export default New;