import FormUncontrolled from "./components/FormUncontrolled";
import FormControlled from "./components/FormControlled";
import FormReactHookForm from "./components/FormReactHookForm";
import FormReactHookFormZod from "./components/FormReactHookFormZod";

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
      <div className="mt-4">
        <p>React Hook Form whit Zod</p>
      </div>
      <div className="container-fluid">
        <FormReactHookFormZod />
      </div>
      <div className="mt-4">
        <p>Second React Hook Form whit Zod</p>
      </div>
      <div className="container-fluid">
        <FormReactHookFormZod />
      </div>
    </div>
  );
}

export default App;
