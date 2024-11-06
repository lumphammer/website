import { For } from "solid-js";
import { createStore } from "solid-js/store";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
  const [store, setStore] = createStore({
    nextId: 3,
    get count() {
      return this.todos.length;
    },
    todos: [
      { id: 1, title: "Buy milk", completed: false },
      { id: 2, title: "Buy eggs", completed: false },
    ],
  });

  console.log(store.todos.at(-1)); // This won't work

  function addTodo(title: string) {
    setStore("todos", (todos) => [
      ...todos,
      {
        id: store.nextId,
        title,
        completed: false,
      },
    ]);
    setStore("nextId", (nextId) => nextId + 1);
  }

  const input = <input />;

  return (
    <main class="container">
      <h1>Todos</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(
            (input as HTMLFormElement).value
            // (e.currentTarget as HTMLFormElement).querySelector("input")!.value
          );
        }}
      >
        {input}
        <button type="submit">Add</button>
      </form>
      <For each={store.todos}>
        {(todo) => (
          <div>
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
          </div>
        )}
      </For>
    </main>
  );
}
