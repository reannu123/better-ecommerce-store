"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

interface CurrencyProps {
  value?: string | number;
}
const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
