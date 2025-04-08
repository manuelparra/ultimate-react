import { Meal } from "../types";
import { SimpleGrid } from "@chakra-ui/react";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
};

function MainContent({ meals, loading }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SimpleGrid columns={[2, null, 3]}>
        {loading &&
          skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
        {!loading &&
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
      </SimpleGrid>
    </>
  );
}

export default MainContent;
