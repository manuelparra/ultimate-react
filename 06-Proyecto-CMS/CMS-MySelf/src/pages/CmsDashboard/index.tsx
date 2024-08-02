import { useState } from "react";
import CmsForm from "../../components/CmsForm";
import Lista from "../../components/Lista";

type Props = {};

function CmsDashboard({}: Props) {
  const [cmslist, setCmslist] = useState<
    {
      id: string;
      name: string;
      lastname: string;
      email: string;
    }[]
  >([]);

  const addItem = (name: string, lastname: string, email: string) => {
    setCmslist([
      ...cmslist,
      {
        id: Math.random().toString(),
        name: name,
        lastname: lastname,
        email: email,
      },
    ]);
  };

  return (
    <>
      <CmsForm submit={addItem} />
      <Lista cmslist={cmslist} />
    </>
  );
}

export default CmsDashboard;
