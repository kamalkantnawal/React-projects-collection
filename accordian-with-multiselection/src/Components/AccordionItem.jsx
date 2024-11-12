import React from "react";
import { AccordionItemDiv } from "./Style";

const AccordionItem = ({
  id,
  title,
  description,
  selectedItemId,
  setSelectedItemId,
  isMultiSelection,
  multiSelectedIndex,
  setMultiSelectedIndex,
}) => {
  const handleClickedSingle = (id) => {
    if (id === selectedItemId) {
      setSelectedItemId(-1);
    } else setSelectedItemId(id);
  };
  const handleClickedMulti = (id) => {
    if (multiSelectedIndex.indexOf(id) === -1) {
      setMultiSelectedIndex([...multiSelectedIndex, id]);
    } else {
      setMultiSelectedIndex(multiSelectedIndex.splice(id, 1));
    }
  };
  return (
    <AccordionItemDiv>
      <div
        className="title"
        onClick={
          !isMultiSelection
            ? () => handleClickedSingle(id)
            : () => handleClickedMulti(id)
        }
      >
        <div className="heading">
          <span>{title}</span>
          <span className="plus-icon">+</span>
        </div>
      </div>
      <div className="description">
        {isMultiSelection
          ? multiSelectedIndex.indexOf(id) !== -1 && <div>{description}</div>
          : selectedItemId === id && <div>{description}</div>}
      </div>
    </AccordionItemDiv>
  );
};

export default AccordionItem;
