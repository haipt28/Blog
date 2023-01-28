import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import FooterBlog from './footer';
import { HeaderBlog } from './header';

interface BlogLayoutProps {
  children?: ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return (
    <Stack sx={{ display: 'flex', flex: 1, height: '100%' }}>
      <HeaderBlog />
      {children}
      <FooterBlog />
    </Stack>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node
};

export default BlogLayout;
