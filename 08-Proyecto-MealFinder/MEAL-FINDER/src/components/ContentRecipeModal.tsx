import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import { MealDetails } from "../types";

type Props = {
  loadingMealDetails: boolean;
  mealDetailsData: MealDetails | undefined;
};

function ContentRecipeModal({ loadingMealDetails, mealDetailsData }: Props) {
  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          {loadingMealDetails ? (
            <RecipeModalSkeleton />
          ) : (
            mealDetailsData && (
              <>
                <Dialog.Header>
                  <Dialog.Title>{mealDetailsData.strMeal}</Dialog.Title>
                </Dialog.Header>
                <Dialog.Context>
                  {(store) => (
                    <Dialog.Body pt="6" spaceY="3">
                      <Image
                        width="100%"
                        borderRadius="lg"
                        alt={mealDetailsData.srtMeal}
                        src={mealDetailsData.strMealThumb}
                      />
                      <Heading mt="4" mb="4" size="md">
                        Ingredientes
                      </Heading>
                      <Text whiteSpace="pre-line" mt="4">
                        {mealDetailsData.strInstructions}
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

export default ContentRecipeModal;
