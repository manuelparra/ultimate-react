import { ReactNode, useState } from "react";
import TitlesContext from "../contexts/TitlesContext";

type Props = {
  children: ReactNode;
};

function TitlesProvider({ children }: Props) {
  const [titles] = useState({ todosTitle: "-- Todos --" });

  return (
    <>
      <TitlesContext.Provider value={titles}>{children}</TitlesContext.Provider>
    </>
  );
}

export default TitlesProvider;
