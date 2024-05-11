import useGames from "../hooks/useGames";
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";

import React, { useRef } from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text> {error.message}</Text>;

  const FetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <div id="scrollTarget" style={{ overflowY: "auto" }}>
      <InfiniteScroll
        dataLength={FetchedGameCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
        scrollableTarget="scrollTarget"
      >
        <SimpleGrid
          padding="10px"
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
