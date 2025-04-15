import { Card, Image } from "@chakra-ui/react";
import { Meal, MealDetails } from "../types";
import RecipeModal from "./RecipeModal";

type Props = {
  meal: Meal;
  mealDetailsData: MealDetails | undefined;
  loadingMealDetails: boolean;
  handleClick: (mealId: string) => void;
};

function MealCard({
  meal,
  loadingMealDetails,
  mealDetailsData,
  handleClick,
}: Props) {
  return (
    <Card.Root boxShadow="lg" m="3" overflow="hidden" borderRadius="lg">
      <Image
        borderRadius={5}
        m="6"
        src={meal.strMealThumb}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="0">
        <Card.Title lineHeight="1" fontSize={14} color="blue.400">
          {meal.strMeal}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <RecipeModal
          mealId={meal.idMeal}
          mealDetailsData={mealDetailsData}
          loadingMealDetails={loadingMealDetails}
          handleClick={handleClick}
        />
      </Card.Footer>
    </Card.Root>
  );
}

export default MealCard;
