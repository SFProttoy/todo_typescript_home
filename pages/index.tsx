import type { NextPage } from "next";
import { useState } from "react";
import InputField from "../components/InputField";
import { Todo } from "../model";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  };

  console.log(todos)

  return (
    <div className={styles.container}>
      <InputField todo={todo} setTodo={setTodo} handleAdd={(e)=>handleAdd(e)} />
    </div>
  );
};

export default Home;
