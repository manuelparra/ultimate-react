import { Input, InputGroup, Container, Button, Flex } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

type Props = {};

function Header({}: Props) {
	return (
		<Container maxW="3xl">
			<form>
				<Flex>
					<InputGroup startElement={<LuSearch />}>
						<Input
							mr="2"
							borderColor="blue.400"
							placeholder="Intenta con 'chicken' o 'beans'"
						/>
					</InputGroup>
					<Button>Buscar</Button>
				</Flex>
			</form>
		</Container>
	);
}

export default Header;
