import { Skeleton, SkeletonText, Card } from "@chakra-ui/react";

function SkeletonCard() {
  return (
    <Card.Root boxShadow="lg" m="3" overflow="hidden" borderRadius="lg">
      <Card.Body gap="0">
        <Skeleton height="450px" />
        <SkeletonText noOfLines={3} gap="3" />
      </Card.Body>
    </Card.Root>
  );
}

export default SkeletonCard;
