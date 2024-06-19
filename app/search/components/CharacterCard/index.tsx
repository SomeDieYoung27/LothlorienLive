import React from "react";
import { Character } from "@/app/typesdata/typesdata";

function CharacterCard({
  _id,
  name,
  race,
  gender,
  wikiUrl,
  birth,
  death,
}: Character) {
  const cardStyle = {
    minWidth: "100%",
    padding: "1.5rem",
    backgroundColor: "white",
    color: "black",
    borderRadius: "0.75rem",
    transition: "all 0.2s",
    marginBottom: "1rem",
  };

  const itemTextStyle = {
    fontSize: "1rem",
    paddingBottom: "0.5rem",
  };

  const itemLinkStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingTop: "1rem",
    color: "#d69e2e",
    display: "block",
    textDecoration: "none",
  };

  return (
    <div style={cardStyle}>
      <h3 style={itemTextStyle}>
        <strong>Name:</strong> {name}
      </h3>
      <h3 style={itemTextStyle}>
        <strong>Race:</strong> {race}
      </h3>
      <h3 style={itemTextStyle}>
        <strong>Gender:</strong> {gender}
      </h3>
      <h3 style={itemTextStyle}>
        <strong>Birth:</strong> {birth}
      </h3>
      <h3 style={itemTextStyle}>
        <strong>Death:</strong> {death}
      </h3>
      <a href={wikiUrl} style={itemLinkStyle}>
        More details
      </a>
    </div>
  );
}

export default CharacterCard;
