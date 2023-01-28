import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Head from 'next/head';
import PageHeader from '../../../src/content/Management/category-table/PageHeader';
import RecentOrders from '../../../src/content/Management/category-table/RecentOrders';

function CategoryComponent() {
  return (
    <>
      <Head>
        <title>Danh mục sản phẩm</title>
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

CategoryComponent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CategoryComponent;
