// @ts-ignore
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cards = ({ postCode, litre, households }) => {
  const [data, setData] = useState(null);

  const url =
    "http://localhost:3000/heatingoil/" +
    postCode +
    "/" +
    litre +
    "/" +
    households;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          //'mode': 'cors'
        });
        console.log(response);

        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data);
        } else {
          console.error("Fehler beim Abrufen der Daten");
        }
      } catch (error) {
        console.error("Fehler beim Fetchen der Daten:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.products.map((item, index) => (
          <Card>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.prices.priceTotalGross}€ Gesamtpreis</p>
              <p> {item.prices.priceGross}€ pro 100l</p>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Cards;
