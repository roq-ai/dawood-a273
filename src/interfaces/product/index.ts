import { CartInterface } from 'interfaces/cart';
import { OrderItemInterface } from 'interfaces/order-item';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  cart?: CartInterface[];
  order_item?: OrderItemInterface[];
  company?: CompanyInterface;
  _count?: {
    cart?: number;
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
