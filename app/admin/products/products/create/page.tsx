import { Metadata } from 'next';
import CreateProductForm_06 from './create-product-form_06';

export const metadata: Metadata = {
  title: 'Create Product',
};

const CreateProductPage_06 = () => {
  return (
    <>
      <h2 className='h2-bold'>Create Product</h2>
      <div className='my-8'>
        <CreateProductForm_06 />
      </div>
    </>
  );
};
export default CreateProductPage_06;
