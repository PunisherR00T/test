import { Carousel } from "react-bootstrap"

const Carouscard = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.gaw.to/vehicles/photos/40/19/401948-2020-bmw-8-series.jpg?1024x640"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bmw.fr/content/dam/bmw/marketFR/bmw_fr/all-models/2-series/DI21_000020499%20(1).jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.gaw.to/vehicles/photos/40/19/401948-2020-bmw-8-series.jpg?1024x640"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    )
}

export default Carouscard