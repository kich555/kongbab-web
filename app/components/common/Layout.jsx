import { Space } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Footer from '~/components/Footer/index';
import Nav from '~/components/Header/Nav';

export default function Layout({ children }) {
  const { mobile } = useResponsive();

  return (
    <>
      <Nav />
      <Space h={mobile ? 60 : 80} />
      {children}
      <Footer />
    </>
  );
}
