import React from 'react';
import {CarItem} from "./demo";

interface CarDetailsProps {
  car: CarItem
}

const CarDetails: React.FC<CarDetailsProps> = ({car}) => {
  return (
    <li key={car.model}>
      {car.model} {car.make}
    </li>
  )
};

export default CarDetails;
