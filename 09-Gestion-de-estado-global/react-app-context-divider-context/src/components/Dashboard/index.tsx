import useTodos from "../../hooks/useTodos";
import useUser from "../../hooks/useUser";

function Dashboard() {
  console.log("Dashboard");

  const { todos } = useTodos();
  const { user, toggleLogin } = useUser();

  return (
    <>
      <div>
        {user.name} {todos.length}
      </div>
      <button onClick={() => toggleLogin()}>Login</button>
    </>
  );
}

export default Dashboard;
