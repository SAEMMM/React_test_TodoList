import { useState } from 'react';
import './App.css';

function App() {

  // 기존 todo 목록
  const [todo, setTodo] = useState(['안녕하세요', 'R반 신샘입니다'])

  // input 입력값
  const [value, setValue] = useState('')

  const todoWrite = (e) => {
    setValue(e.target.value)
  }

  // todo 추가 버튼
  const addTodoBtn = () => {
    let copy = [...todo]
    copy.push(value)
    setTodo(copy)
    setValue('')
  }

  return (
    <div>

      <Header value={value} todoWrite={todoWrite} addTodoBtn={addTodoBtn} />

      <h1 className='title'>Todo List</h1>

      <Body todo={todo} />

    </div>
  );
}

function Header(props) {
  return (
    <div className='header'>
      <input className='input-box' type='text'
        value={props.value}
        onChange={props.todoWrite} />
      <button className='addbtn' onClick={props.addTodoBtn}>추가하기</button>
    </div>
  )
}

function Body(props) {
  return (
    <div className='body'>
      {props.todo.map((todo) => {
        return <div className='todo-box'>{todo}</div>
      })}
    </div>
  )
}

export default App;
