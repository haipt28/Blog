import { Card } from '@mui/material';

import { useEffect, useState } from 'react';
import { CategoryApi } from '../../../../api-client/category-api';
import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const [categoryLists, setCategoryLists] = useState<any[]>([]);
  useEffect(() => {
    CategoryApi.getAllCategory().then((res) => {
      setCategoryLists(res.data);
    });
  }, []);

  return (
    <Card>
      <RecentOrdersTable categoryLists={categoryLists} />
    </Card>
  );
}

export default RecentOrders;
