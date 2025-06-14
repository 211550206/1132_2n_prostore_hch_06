// import sampleData from "@/db/sample-data";
import ProductList_06 from "@/components/shared/product_06/product-list_06";
import { getLatestProducts_06 } from "@/lib/actions/product.actions_06";

// const delay = (ms) => 
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

const HomePage_06 = async () => {
  // await delay(5000); #五秒delay
  // console.log('sampleData', sampleData);
  const latestProducts = await getLatestProducts_06();
  return (
  <>
    <ProductList_06 data={latestProducts} title='Newest Arrival' limit={4} />
  </>
  );
};

export default HomePage_06;