"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CharacterList from "./components/CharacterList";
import { useApi } from "@/app/context/api.context";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query");
  const { setSearch, getCharacterList, characterList } = useApi();

  useEffect(() => {
    if (query) {
      setSearch(query); // Update the search term in the context
      getCharacterList(); // Fetch the character list with the new search term
    }
  }, [query, setSearch, getCharacterList]);

  return (
    <>
      {characterList && characterList.length > 0 ? (
        <CharacterList />
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </>
  );
};

export default SearchResults;
