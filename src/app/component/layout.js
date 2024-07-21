// import { Container } from '@shadcn/ui/container';

import Container from "./container";
import '../albums/style.css'
const Layout = ({ children }) => {
  return (
    <Container className="py-4 px-6">
      <header className="py-4 mb-6 border-b">
        <h1 className="text-2xl font-bold">Appolo Client Album Collection</h1>
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
