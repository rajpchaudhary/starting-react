import styled from "@emotion/styled";
import PokemonContext from "./PokemonContext";
import { useContext } from "react";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) =>
        dispatch({ type: "SET_FILTER", payload: evt.target.value })
      }
    />
  );
};

export default PokemonFilter;
