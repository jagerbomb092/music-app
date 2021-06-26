import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ library, setLibrary }) {
  return (
    <nav>
      <h1>Waves</h1>
      <button
        onClick={() => {
          setLibrary(!library);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
