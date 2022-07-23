import Footer from './Footer';
import Nav from './Header/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <section
        style={{
          marginTop: '100px',
        }}
      >
        {children}
      </section>
      <Footer />
    </>
  );
}
