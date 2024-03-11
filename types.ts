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
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  images: Image[];
  color: Color;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
