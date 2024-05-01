import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="150px" />
      <CardBody>
        <SkeletonText height="150px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
