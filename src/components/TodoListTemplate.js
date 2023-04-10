import React from 'react';
import Form from './Form';
import './css/todoListTemplate.css';
import TodoItemList from './TodoItemList';

function TodoListTemplate(props) {
  return (
    <main className='todo-list-template'>
      <header className='title'>
        <h2>
          오늘의 할일
        </h2>
      </header>
      <section className='form-wrapper'>
        <Form />
      </section>

      <section className='todo-wrapper'>
        <TodoItemList />
      </section>
    </main>
  );
}

export default TodoListTemplate;