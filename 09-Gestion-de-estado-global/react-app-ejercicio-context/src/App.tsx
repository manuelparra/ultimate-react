import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import TodosProvider from "./providers/TodosProvider";
import UserProvider from "./providers/UserProvider";
import TitlesProvider from "./providers/TitlesProvider";

function App() {
  console.log("App");
  return (
    <>
      <TodosProvider>
        <UserProvider>
          <TitlesProvider>
            <Dashboard />
            <MainContent />
          </TitlesProvider>
        </UserProvider>
      </TodosProvider>
    </>
  );
}

export default App;
