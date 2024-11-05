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

  const input = (
    <input class="border-2 my-4 border-gray-300 rounded-md p-2 text-gray-800" />
  );

  return (
    <main class="text-center mx-auto my-16">
      <h1 class="text-2xl font-bold">Todos</h1>
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
        <button
          type="submit"
          class="bg-slate-800 border-2 text-white p-2 rounded-md"
        >
          Add
        </button>
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
