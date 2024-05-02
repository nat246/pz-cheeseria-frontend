import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  color: string;
};

const ProductCard = ({ id, name, image, price, color }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="cursor-pointer w-64 h-80 m-4 p-0"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <img className="w-full h-60" alt={name} src={image} />

      <CardBody className="flex flex-col">
        <CardTitle className="justify-start text-lg font-semibold" tag="h4">{name}</CardTitle>

        <CardSubtitle>${`${price.toFixed(2)}`}</CardSubtitle>
        <CardSubtitle>{`Color: ${color}`}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
