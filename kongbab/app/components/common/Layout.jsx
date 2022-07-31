import { Space } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Footer from '~/components/Footer/index';
import Nav from '~/components/Header/Nav';

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