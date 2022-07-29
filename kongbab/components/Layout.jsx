import { Space } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Footer from './Footer';
import Nav from './Header/Nav';

export default function Layout({ children }) {
  const { tablet } = useResponsive();

  return (
    <>
      <Nav />
      <Space h={tablet ? 80 : 100} />
      {children}
      <Footer />
    </>
  );
}
