import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Product } from "../data/product.interface";

const ProductCard = ({ id, name, image, price, color }: Product) => {
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
