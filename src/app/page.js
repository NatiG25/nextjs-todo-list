import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    const todo = e.target.value;
    console.log(todo);
  }

  return (
    <section>
      <h1>To-do-list</h1>
      <form>
      <input type="text" value={value} placeholder="todos" onChange={handleChange}/>
      <button type="submit"></button>
      </form>
    </section>
  )
}
