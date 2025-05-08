import MainContent from "./components/MainContent";
import { TodosProvider } from "./todos";

export default function App() {
  return (
    <TodosProvider>
      <MainContent />
    </TodosProvider>
  );
}
