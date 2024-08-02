type CMSList = {
  id: string;
  name: string;
  lastname: string;
  email: string;
};

type Props = {
  cmslist: CMSList[];
};

function Lista({ cmslist }: Props) {
  return (
    <>
      {cmslist.length == 0 ? (
        <p>No hay datos</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
              </tr>
            </thead>
            <tbody>
              {cmslist.map((contact, index) => (
                <tr
                  className={`${index % 2 == 0 ? "table-light" : null}`}
                  key={contact.id}
                >
                  <td scope="row">{contact.name}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default Lista;
