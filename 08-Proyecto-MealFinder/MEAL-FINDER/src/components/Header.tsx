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
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Field.Root invalid={!!formState.errors.search}>
            <InputGroup startElement={<LuSearch />}>
              <Input
                borderColor={formState.errors.search ? "crimson" : "blue.400"}
                {...register("search", { required: true })}
                mr="2"
                placeholder="Intenta con 'chicken' o 'beans'"
              />
            </InputGroup>
          </Field.Root>
          <Button type="submit" bgColor="blue.400" color="white">
            Buscar
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

export default Header;
