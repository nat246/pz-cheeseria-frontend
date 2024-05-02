import { useState } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

const PriceCalculator = ({ price }: { price: number }) => {
  const [cost, setCost] = useState(0);

  const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = Number(event.target.value);

    setCost((newWeight * price)/1000);
  };

  return (
    <div>
      <h4 className="text-xl">Weight-Price Calculator (cost per gram)</h4>
      <InputGroup>
        <Input type="number" onChange={handleCostChange} />

        <InputGroupText>g</InputGroupText>
      </InputGroup>
      <p>Cost: ${cost.toFixed(2)} </p>
    </div>
  );
};

export default PriceCalculator;
