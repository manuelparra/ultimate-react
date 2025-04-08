import { Card, Image, Button } from "@chakra-ui/react";
import { Meal } from "../types";

type Props = {
  meal: Meal;
};

function MealCard({ meal }: Props) {
  return (
    <Card.Root boxShadow="lg" m="3" overflow="hidden" borderRadius="lg">
      <Image
        src={meal.strMealThumb}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="0">
        <Card.Title lineHeight="1" fontSize={14} color="blue.400">
          {meal.strMeal}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="solid" color="white" bgColor="blue.400">
          Ver receta
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default MealCard;
