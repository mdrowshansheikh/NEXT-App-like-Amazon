/* eslint-disable react/jsx-key */
import data from '../utils/data';
import Layout from '../components/layout.js';
import ProductItem from '../components/productItem.js';
export default function Home() {
  return (
    <Layout title={'Home page'}>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
