import { createContext } from "react";

type onSearch = (searchText: string) => void;

export const SearchContex = createContext<onSearch | null>(null);
