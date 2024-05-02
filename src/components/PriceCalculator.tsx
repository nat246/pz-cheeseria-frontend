import { useState } from "react";
import { Input } from "reactstrap";

const PriceCalculator = ({ price }: { price: number }) => {
  const [cost, setCost] = useState(0);

  const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = Number(event.target.value);

    setCost(newWeight * price);
  };

  return (
    <div>
      <h4 className="text-xl">Weight-Price Calculator</h4>
      <Input type="number" onChange={handleCostChange} />
      <p>Cost: ${cost.toFixed(2)} </p>
    </div>
  );
};

export default PriceCalculator;
