import { useQuery, gql } from "@apollo/client";
import PropertyComponent from "./property";

export interface PropertyType {
  id: number;
  title: string;
  location: string;
  price: number;
  numberOfGuests: number;
  createdAt: Date;
  updatedAt: Date;
}

interface PropertyResponse {
  properties: PropertyType[];
}

const GET_ALL_PROPERTIES = gql`
  query GetAllProperties {
    properties {
      id
      title
      location
      price
      numberOfGuests
      createdAt
      updatedAt
    }
  }
`;

const Properties = () => {
  const { loading, error, data } =
    useQuery<PropertyResponse>(GET_ALL_PROPERTIES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      {data?.properties.map((property) => (
        <PropertyComponent
          key={property.id}
          title={property.title}
          location={property.location}
          price={property.price}
          numberOfGuests={property.numberOfGuests}
        />
      ))}
    </div>
  );
};

export default Properties;
