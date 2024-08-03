import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

function CMS() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <ContactForm />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <ContactTable />
        </div>
      </div>
    </div>
  );
}

export default CMS;
