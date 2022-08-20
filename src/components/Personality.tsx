import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function Personality(props: any) {
  const [personality, setPersonality] = useLocalStorage("personality", {
    traits: "",
    ideals: "",
    bonds: "",
    flaws: "",
  });
  const handlePersonalityChange = (event: any) => {
    setPersonality({ ...personality, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div>Personality Traits</div>
      <textarea
        name="traits"
        id=""
        cols={30}
        rows={5}
        value={personality.traits}
        onChange={handlePersonalityChange}
      />
      <div>Ideals</div>
      <textarea
        name="ideals"
        id=""
        cols={30}
        rows={5}
        value={personality.ideals}
        onChange={handlePersonalityChange}
      />
      <div>Bonds</div>
      <textarea
        name="bonds"
        id=""
        cols={30}
        rows={5}
        value={personality.bonds}
        onChange={handlePersonalityChange}
      />
      <div>Flaws</div>
      <textarea
        name="flaws"
        id=""
        cols={30}
        rows={5}
        value={personality.flaws}
        onChange={handlePersonalityChange}
      />
    </div>
  );
}
