import { SyntheticEvent, useState } from "react";

interface todoType {
  id: number;
  title: string;
}

let idNext = 0;

export function Form() {
  const [todo, setTodo] = useState<string>("");
  const [todolist, setTodoList] = useState<todoType[]>([]);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setTodo("");
    setTodoList([...todolist, { id: idNext++, title: todo }]);
    console.log(todolist);
  }

  return (
    <div>
      <form>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <div>
        {todolist.map((item) => {
          return (
            <>
              <li>
                {item.title}
                <button
                  onClick={() => {
                    setTodoList(todolist.filter((a) => a.id !== item.id));
                  }}
                >
                  del
                </button>
              </li>
            </>
          );
        })}
      </div>
    </div>
  );
}
