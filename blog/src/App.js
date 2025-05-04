import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let temp = [...title];
        temp.sort();
        setTitle(temp);
      }}>가나다 순 정렬</button>

      <div className="list">
        <h4>{ title[0] }
          <span onClick={ () => { setLike(like+1) } }>👍</span> { like }
        </h4>
        <button onClick={() => {
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);
        }}>제목 변경</button>
        <p>4월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>4월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>4월 25일 발행</p>
      </div>
      
      <Modal/>

    </div>
  );
}

function Modal() {
  return (
    <div className = "modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
