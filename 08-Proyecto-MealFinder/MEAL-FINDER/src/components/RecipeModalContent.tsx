import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import { MealDetails } from "../types";
import RecipemodalContentDetails from "./RecipeModalContentDetails";

type Props = {
  loadingMealDetails: boolean;
  mealDetailsData: MealDetails | undefined;
};

function RecipeModalContent({ loadingMealDetails, mealDetailsData }: Props) {
  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          {loadingMealDetails ? (
            <RecipeModalSkeleton />
          ) : (
            mealDetailsData && (
              <RecipemodalContentDetails data={mealDetailsData} />
            )
          )}
          <Dialog.CloseTrigger asChild>
            <CloseButton size="md" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
}

export default RecipeModalContent;
