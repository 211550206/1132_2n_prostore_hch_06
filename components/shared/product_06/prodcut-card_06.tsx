import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Rating_06 from './rating_06';
import ProductPrice_06 from './product-price_06';

const ProductCard_06 = ({ product }: { product: any }) => {
    console.log('product', product);
    return (
    <Card className='w-full max-w-sm'>
        <CardHeader>
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              height={300}
              width={300}
              alt={product.name}
              priority={true}
            />
          </Link>
        </CardHeader>
        <CardContent className='p-4 grid gap-4'>
            <div className="text-xs">{product.brand}</div>
            <Link href={`/product/${product.slug}`}>
              <h2 className='test-sm font-medium'>{product.name}</h2>
              </Link>
              <div className='flex-between gap-4'>
                <Rating_06 value={Number(product.rating)} />
                {product.stock > 0 ? (
                    <ProductPrice_06 value={Number(product.price)} />
                ) : (
                    <p className='text-red-500'>Out of Stock</p>
                )}
              </div>
        </CardContent>
    </Card>
  );
};

export default ProductCard_06;
