import { Footer } from "features/product/components/Footer";
import { Header } from "features/product/components/Header";
import { Heroes } from "features/product/components/Heroes";

const ProductPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
        <Header />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
