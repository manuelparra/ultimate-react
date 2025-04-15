import {
  Input,
  Field,
  InputGroup,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { SearchForm } from "../types";

type Props = {
  search: string;
  onSubmit: (data: SearchForm) => void;
  setSearch: (search: string) => void;
};

function Header({ search, onSubmit, setSearch }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();

  return (
    <Container maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Field.Root invalid={!!formState.errors.search}>
            <InputGroup startElement={<LuSearch />}>
              <Input
                type="text"
                borderColor={formState.errors.search ? "crimson" : "blue.400"}
                {...register("search", {
                  required: true,
                  minLength: { value: 2, message: "El largo minimo es 2" },
                })}
                mr="2"
                placeholder="Intenta con 'chicken' o 'beans'"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                }}
              />
            </InputGroup>
          </Field.Root>
          <Button
            type="submit"
            bgColor="blue.400"
            color="white"
            _hover={{ bgColor: "blue.300" }}
          >
            Buscar
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

export default Header;
