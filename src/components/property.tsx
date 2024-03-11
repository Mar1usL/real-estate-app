import React from "react";
import { PropertyType } from "./properties";

type PropertyProps = Omit<PropertyType, "id" | "createdAt" | "updatedAt">;

const PropertyComponent = ({
  title,
  location,
  price,
  numberOfGuests,
}: PropertyProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{price}</p>
      <p>{numberOfGuests}</p>
    </div>
  );
};

export default PropertyComponent;
