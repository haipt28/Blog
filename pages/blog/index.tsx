import type { ReactElement } from 'react';

import Head from 'next/head';

import BlogLayout from '@/layouts/blogLayout';
import Stack from '@mui/material/Stack';
import Hero from 'src/content/Overview/Hero';

function BlogPage() {
  return (
    <Stack
      sx={{
        flex: 1
      }}
    >
      <Head>
        <title>Blog</title>
      </Head>
      hehe
    </Stack>
  );
}

export default BlogPage;

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};
