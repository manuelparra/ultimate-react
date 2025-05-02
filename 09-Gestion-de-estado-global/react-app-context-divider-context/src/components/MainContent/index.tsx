import TodoList from "../TodoList";

function MainContent() {
  console.log("Main Content");
  return (
    <div>
      <h2>Todos</h2>
      <TodoList />
    </div>
  );
}

export default MainContent;
