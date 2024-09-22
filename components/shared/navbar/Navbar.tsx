import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from '@/components/shared/navbar/MobileNav';
import Theme from '@/components/shared/navbar/Theme';
import GlobalSearch from '@/components/shared/search/GlobalSearch';

const Navbar = () => {
  return (
    <nav className="background-light900_dark200 fixed z-50 flex w-full justify-between px-8 py-1.5">
      <Link href="/" className="flex items-center gap-x-2.5">
        <Image
          src="/assets/images/site-logo.svg"
          width={32}
          height={32}
          alt="Ham Flow"
        />

        <p className="h1-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Ham <span className="text-primary-500">Flow</span></p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />

        <SignedIn>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10'
              },
              variables: {
                colorPrimary: '#ff7000'
              }
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar