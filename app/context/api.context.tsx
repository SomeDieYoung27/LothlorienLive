"use client";

import { Character, ApiContextType } from "../typesdata/typesdata";
import { createContext, useContext, useState } from "react";
import axios from "axios";

const ApiContext = createContext<ApiContextType | null>(null);

export const ApiContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [search, setSearch] = useState("");

  const getCharacterList = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://the-one-api.dev/v2/character?name=${search}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      })
      .then((res) => {
        setCharacterList(res.data.docs);
        console.log("res.data.docs", res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ApiContext.Provider
      value={{
        characterList,
        setCharacterList,
        getCharacterList,
        search,
        setSearch,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);

export function useApi() {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error("useApi must be used within a ApiContextProvider");
  }
  return context;
}
