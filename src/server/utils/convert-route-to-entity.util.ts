const mapping: Record<string, string> = {
  carts: 'cart',
  companies: 'company',
  orders: 'order',
  'order-items': 'order_item',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
