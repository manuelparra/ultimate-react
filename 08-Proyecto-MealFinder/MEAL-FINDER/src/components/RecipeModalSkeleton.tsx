import {
  Container,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

type Props = {};

function RecipeModalSkeleton({}: Props) {
  return (
    <Container>
      <Stack>
        <Skeleton height="35px" mt="12" />
        <Skeleton height="200px" />
        <HStack>
          <SkeletonText noOfLines={5} gap="3" />
        </HStack>
      </Stack>
    </Container>
  );
}

export default RecipeModalSkeleton;
