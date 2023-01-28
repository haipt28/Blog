import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/components/Footer';
import RecentOrders from '../../../src/content/Management/product-table/RecentOrders';
import PageHeader from '../../../src/content/Management/product-table/PageHeader';

function ProductComponent() {
  return (
    <>
      <Head>
        <title>Sản phẩm</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ProductComponent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductComponent;
