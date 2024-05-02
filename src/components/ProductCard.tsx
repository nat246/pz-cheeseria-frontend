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
    <Card onClick={() => {navigate(`/product/${id}`)}}>
      <img alt={name} src={image} />
      <CardBody>
        <CardTitle tag="h4">{name}</CardTitle>

        <CardSubtitle>${`${price.toFixed(2)}`}</CardSubtitle>
        <CardSubtitle>{`Color: ${color}`}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
