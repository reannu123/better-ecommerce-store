"use client";
import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  let defaultVariant = "";
  if (data.variants.length !== 0) {
    defaultVariant = data.variants[0].options[0].id;
  }

  const [selectedValues, setSelectedValues] = useState({});

  const handleToggleChange = (variantId: any) => (value: any) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [variantId]: value,
    }));
  };
  const onAddToCart = () => {
    const selectedValuesArray = Object.values(selectedValues).sort();
    const variant = data.productVariants.find((productVariant) => {
      return [...productVariant.options].sort().every((option, index) => {
        return [...selectedValuesArray].sort()[index] === option.id;
      });
    });
    if (!variant) {
      return;
    }
    cart.addItem(variant);
  };
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-bold text-gray-900 ">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        {data.variants &&
          data.variants.map((variant, index) => (
            <div
              key={variant.id}
              className="flex items-center gap-x-4"
            >
              <ToggleGroup
                type="single"
                variant={"outline"}
                onValueChange={handleToggleChange(index)}
              >
                <h3 className="font-semibold text-black">{variant.title}:</h3>
                {variant.options.map((option) => (
                  <ToggleGroupItem
                    value={option.id}
                    key={option.id}
                  >
                    {option.value}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          ))}
        {data.description && (
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-black">Description:</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>
        )}
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 hover:scale-105"
        >
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
