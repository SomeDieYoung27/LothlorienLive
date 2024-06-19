import React from "react";

import { Character } from "@/app/typesdata/typesdata";
import CharacterCard from "../CharacterCard";
import { useApi } from "@/app/context/api.context";

function CharacterList() {
  const { characterList } = useApi();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        marginTop: "48px",
        padding: "16px",
      }}
    >
      {characterList ? (
        characterList.map((character: Character, index) => (
          <CharacterCard key={index} {...character} />
        ))
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default CharacterList;
