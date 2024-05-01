import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap"

const ProductCard = () => {
  return(
    <Card>
      <img alt="cheese-name" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h4">
          Cheese
        </CardTitle>

        <CardSubtitle>
          $82.55/kg
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default ProductCard;