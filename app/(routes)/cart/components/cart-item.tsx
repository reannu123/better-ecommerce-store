import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Product, ProductVariant } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

interface CartItemProps {
  data: ProductVariant;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.product.images[0].url}
          alt={data.product.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={onRemove}
            icon={
              <X
                size={20}
                className="text-gray-600"
              />
            }
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">
              {data.product.name}
            </p>
          </div>

          <div className="mt-1 me-10 flex text-sm">
            {data.options.map((option) => (
              <p
                key={option.id}
                className="text-gray-500 ml-4 border-l border-gray-200 pl-4"
              >
                {option.value}
              </p>
            ))}
          </div>
          <Currency value={data.product.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
