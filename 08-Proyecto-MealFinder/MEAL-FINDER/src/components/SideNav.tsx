import { Heading } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
};

function SideNav({ categories, loading }: Props) {
  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        Categorias
      </Heading>
    </>
  );
}

export default SideNav;
