import { Meal, MealDetails } from "../types";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  mealDetailsData: MealDetails | undefined;
  loading: boolean;
  loadingMealDetails: boolean;
  handleClick: (mealId: string) => void;
};

function MainContent({
  meals,
  mealDetailsData,
  loading,
  loadingMealDetails,
  handleClick,
}: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SimpleGrid columns={[2, null, 3]}>
        {loading &&
          skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
        {!loading && meals != null ? (
          meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              mealDetailsData={mealDetailsData}
              loadingMealDetails={loadingMealDetails}
              handleClick={handleClick}
            />
          ))
        ) : (
          <Text mt="2" color="red.400" textStyle="xl">
            No se encontraron resultados...
          </Text>
        )}
      </SimpleGrid>
    </>
  );
}

export default MainContent;
