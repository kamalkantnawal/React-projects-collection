import React, { useState } from "react";
import { accordianData } from "../Constants/Data";
import AccordionItem from "./AccordionItem";
import { AccordionDiv } from "./Style";
const Accordion = () => {
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [isMultiSelection, setIsMultiSelection] = useState(false);
  const [multiSelectedIndex, setMultiSelectedIndex] = useState([]);
  console.log(isMultiSelection);
  return (
    <AccordionDiv>
      <div className="is-multiselection">
        <button
          onClick={() => setIsMultiSelection(!isMultiSelection)}
          className="btn"
        >
          Multi Selection {isMultiSelection ? "Enabled" : "Disabled"}
        </button>
      </div>
      <div>
        {accordianData.length > 0
          ? accordianData.map(({ id, title, description }) => {
              return (
                <AccordionItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  selectedItemId={selectedItemId}
                  setSelectedItemId={setSelectedItemId}
                  isMultiSelection={isMultiSelection}
                  multiSelectedIndex={multiSelectedIndex}
                  setMultiSelectedIndex={setMultiSelectedIndex}
                />
              );
            })
          : "No items to show"}
      </div>
    </AccordionDiv>
  );
};

export default Accordion;
