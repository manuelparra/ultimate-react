import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Meal } from "../types";

type Props = {
  meals: Meal[];
  loading: boolean;
};

function MainContent({ meals, loading }: Props) {
  console.log(meals, loading);

  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Heading size="md">
          <Text>Living room Sofa</Text>
        </Heading>
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
      </CardBody>
    </Card>
  );
}

export default MainContent;
