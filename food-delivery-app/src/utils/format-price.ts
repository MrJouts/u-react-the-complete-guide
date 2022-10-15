export const formatPrice = (price: number) =>
  price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
