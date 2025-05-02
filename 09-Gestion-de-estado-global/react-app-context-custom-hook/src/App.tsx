import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import TodosProvider from "./providers/TodosProvider";

function App() {
  return (
    <>
      <TodosProvider>
        <Dashboard />
        <MainContent />
      </TodosProvider>
    </>
  );
}

export default App;
