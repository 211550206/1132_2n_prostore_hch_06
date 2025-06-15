import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {APP_NAME} from '@/lib/constants';
import { EllipsisVertical, ShoppingCart, UserIcon} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modetoggle_06 from './mode-toggle_06';

const Header_06 = () => {
    return (
      <header className='w-full border-b'>
        <div className="wrapper flex-between">
          <div className='flex-start'>
            <Link href='/'>
              <Image
                src='/images/logo.svg' 
                height={48} 
                width={48} 
                priority={true} 
                 alt={`${APP_NAME} logo`}
              />
            </Link>
          </div>
          <div className='flex justify-end gap-3'>
            <Modetoggle_06 />
            <Button asChild variant='outline'>
                <Link href='/cart_06'>
                  <ShoppingCart /> cart_06
                </Link>
            </Button>
            <Button asChild>
                <Link href='/sign-in'>
                  <UserIcon /> signIn
                </Link>
            </Button>
          </div>
        </div> 
      </header>
    );
};

export default Header_06;
