import FormUncontrolled from "./components/FormUncontrolled";
import FormControlled from "./components/FormControlled";
import FormReactHookForm from "./components/FormReactHookForm";

function App() {
  return (
    <div className="container-sm">
      <div className="mt-4">
        <p>Formulario Uncontrolled</p>
      </div>
      <div className="container-fluid">
        <FormUncontrolled />
      </div>
      <div className="mt-4">
        <p>Formulario Controlado</p>
      </div>
      <div className="container-fluid">
        <FormControlled />
      </div>
      <div className="mt-4">
        <p>React Hook Form</p>
      </div>
      <div className="container-fluid">
        <FormReactHookForm />
      </div>
    </div>
  );
}

export default App;
