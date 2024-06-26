import useGames from "../hooks/useGames";
import { Alert, AlertIcon, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

import React from "react";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error)
    return (
      <Alert status="error" width="fit-content">
        <AlertIcon />
        {error.message}
      </Alert>
    );

  const FetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <div id="scrollTarget">
      <InfiniteScroll
        dataLength={FetchedGameCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={6}
        >
          {isLoading
            ? skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </div>
  );
};

export default GameGrid;
