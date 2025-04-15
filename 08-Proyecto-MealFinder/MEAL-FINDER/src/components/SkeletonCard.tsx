import { Skeleton, SkeletonText, Card } from "@chakra-ui/react";

function SkeletonCard() {
  return (
    <Card.Root boxShadow="lg" m="3" overflow="hidden" borderRadius={5}>
      <Card.Body gap="0">
        <Skeleton height="360px" />
        <SkeletonText noOfLines={3} gap="6" />
      </Card.Body>
    </Card.Root>
  );
}

export default SkeletonCard;
