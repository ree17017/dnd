import React from "react";
import useLocalStorage from "react-localstorage-hook";

export default function Feats() {
  const [feats, setFeats] = useLocalStorage("feats");
  const [featList, setFeatList] = useLocalStorage("featList", [0]);

  const handleFeats = (event) => {
    setFeats({ ...feats, [event.target.name]: event.target.value });
  };

  const addFeats = () => {
    setFeatList([...featList, +featList[featList.length - 1] + 1]);
  };

  const handleRemoveFeat = (featId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to remove this feat?")) {
      if (featList.length > 0) {
        let safeFeats = featList.filter((feat) => feat !== featId);
        setFeats({
          ...feats,
          [`featName-${featId}`]: "",
          [`featDescription-${featId}`]: "",
        });
        setFeatList(safeFeats);
      }
    }
  };

  return (
    <div className="feats-container">
      <button onClick={addFeats}>Add Feat</button>

      {featList.map((featId) => (
        <div className="feat">
          {featId !== 0 && (
            <button onClick={() => handleRemoveFeat(featId)}>
              Remove Feat
            </button>
          )}
          <div>Feat Name</div>
          <input
            type="text"
            onChange={handleFeats}
            name={`featName-${featId}`}
            value={feats[`featName-${featId}`]}
          />
          <div>Description</div>
          <textarea
            name={`featDescription-${featId}`}
            onChange={handleFeats}
            cols="30"
            rows="10"
            value={feats[`featDescription-${featId}`]}
          />
        </div>
      ))}
    </div>
  );
}
