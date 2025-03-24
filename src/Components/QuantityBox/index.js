import { Button } from "@mui/material";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityBox = () => {
  const [inputVal, setInputVal] = useState(1);

  const minus = () => {
    if (inputVal > 1) {
      setInputVal(inputVal - 1);
    }
  };

  const plus = () => {
    setInputVal(inputVal + 1);
  };

  return (
    <div className="quantityDrop d-flex aligns-item-center">
      <Button>
        <FaMinus onClick={minus}/>
      </Button>
      <input className="text" value={inputVal}></input>
      <Button>
        <FaPlus onClick={plus}/>
      </Button>
    </div>
  );
};

export default QuantityBox;
