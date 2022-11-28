import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductsList';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TechWear - Your Tech Fashion</title>
        <meta
          name="description"
          content="Get Your Tech Fashion from Here - Tech Wear"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}
