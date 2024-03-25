export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboardId: string;
}

export interface Product {
  id: string;
  category: Category;
  description: string;
  name: string;
  price: string;
  isFeatured: boolean;
  productVariants: ProductVariant[];
  images: Image[];
  variants: Variant[];
}

export interface Variant {
  id: string;
  title: string;
  options: Option[];
}

export interface Option {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface ProductVariant {
  id: string;
  product: Product;
  price: string;
  options: Option[];
}
