import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import MobileNav from '@/components/shared/navbar/MobileNav';
import Theme from '@/components/shared/navbar/Theme';
import GlobalSearch from '@/components/shared/search/GlobalSearch';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full justify-between bg-white py-3 pl-4 pr-8 dark:bg-slate-950">
      <Link href="/" className="flex items-center gap-x-2">
        <Image
          src="/assets/images/site-logo.svg"
          width={32}
          height={32}
          alt="ham flow"
        />
        <p className="font-spaceGrotesk text-4xl font-thin tracking-tighter text-slate-950 dark:text-white max-sm:hidden">Ham <span className="text-primary-500">Flow</span></p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-2">
        <Theme />

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-8 h-8'
              },
              variables: {
                colorPrimary: '#008FFF'
              }
            }}
          />
        </SignedIn>

        <SignedOut>
        <div className="flex flex-row gap-3">
          <Link href="/sign-in">
            <Button className="btn-secondary w-[64px] rounded-md p-4 shadow-none">
              <Image 
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              /> 
              <span className="primary-text-gradient max-lg:hidden">Log In</span>
            </Button>
          </Link>
      
          <Link href="/sign-up">
            <Button className='btn-tertiary w-[64] rounded-md p-4 shadow-none'>
              <Image 
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              /> 
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>

        </SignedOut>


        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar;
