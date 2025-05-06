import MainContent from "./components/MainContent";
import TodosProvider from "./providers/TodosProvider";

export default function App() {
  return (
    <TodosProvider>
      <MainContent />
    </TodosProvider>
  );
}
