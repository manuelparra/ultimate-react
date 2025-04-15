import { Button, Dialog } from "@chakra-ui/react";
import { MealDetails } from "../types";
import RecipeModalContent from "./RecipeModalContent";

type Props = {
  mealId: string;
  mealDetailsData: MealDetails | undefined;
  loadingMealDetails: boolean;
  handleClick: (mealId: string) => void;
};

function RecipeModal({
  mealId,
  loadingMealDetails,
  mealDetailsData,
  handleClick,
}: Props) {
  return (
    <>
      <Dialog.Root closeOnInteractOutside={false}>
        <Dialog.Trigger asChild>
          <Button
            variant="solid"
            color="white"
            bgColor="blue.400"
            _hover={{ bgColor: "blue.300" }}
            onClick={() => handleClick(mealId)}
          >
            Ver receta
          </Button>
        </Dialog.Trigger>
        <RecipeModalContent
          loadingMealDetails={loadingMealDetails}
          mealDetailsData={mealDetailsData}
        />
      </Dialog.Root>
    </>
  );
}

export default RecipeModal;
