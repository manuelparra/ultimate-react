import { Button, Dialog, Heading, Image, List, Text } from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredientsMessures = (data: MealDetails) => {
  let ingridients = [];

  for (let index = 1; index <= 20; index++) {
    const ingridient = data[`strIngredient${index}`];
    const messure = data[`strMeasure${index}`];

    if (ingridient !== "") {
      ingridients.push(`${ingridient} - ${messure}`);
    }
  }

  return ingridients;
};

function RecipemodalContentDetails({ data }: Props) {
  const ingredients = joinIngredientsMessures(data);
  return (
    <>
      <Dialog.Header>
        <Dialog.Title>{data.strMeal}</Dialog.Title>
      </Dialog.Header>
      <Dialog.Context>
        {(store) => (
          <Dialog.Body pt="6" spaceY="3">
            <Image
              width="100%"
              borderRadius="lg"
              alt={data.srtMeal}
              src={data.strMealThumb}
            />
            <Heading mt="4" mb="4" size="md">
              Ingredientes:
            </Heading>
            <List.Root>
              {ingredients.map((ingredient) => (
                <List.Item key={ingredient}>{ingredient}</List.Item>
              ))}
            </List.Root>
            <Heading mt="4" mb="4" size="md">
              Modo de preparación:
            </Heading>
            <Text whiteSpace="pre-line" mt="4">
              {data.strInstructions}
            </Text>
            <Button
              onClick={() => store.setOpen(false)}
              bgColor="blue.400"
              _hover={{ bgColor: "blue.300" }}
            >
              Close
            </Button>
          </Dialog.Body>
        )}
      </Dialog.Context>
    </>
  );
}

export default RecipemodalContentDetails;
