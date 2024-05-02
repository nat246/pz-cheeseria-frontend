import { Dispatch } from "react";

export interface SearchProps {
  searchQuery?: string;
  setSearchQuery: Dispatch<React.SetStateAction<string>>;
}