import { Card } from '@mui/material';

import { useEffect, useState } from 'react';
import { productApi } from '../../../../api-client/product-api';
import { CryptoOrder } from '../../../models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const [productLists, setProductLists] = useState<any[]>([]);
  useEffect(() => {
    productApi.getAllProduct().then((res) => {
      setProductLists(res.data);
    });
  }, []);

  return (
    <Card>
      <RecentOrdersTable productLists={productLists} />
    </Card>
  );
}

export default RecentOrders;
