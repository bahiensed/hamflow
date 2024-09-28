"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { sidebarLinks } from '@/constants';

const LeftSidebar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  
  return (
    <section className="custom-scrollbar sticky flex h-screen flex-col justify-between overflow-y-auto bg-white px-2 pt-24 font-spaceGrotesk text-lg font-normal tracking-tight dark:bg-slate-950 max-sm:hidden lg:w-[240px]">
      <div className="flex flex-1 flex-col gap-1">
        {sidebarLinks.map((item) => {
          const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

          // if user is logged in show his own profile and my favorites links
          // else don't show any of both links
          if(item.route === '/profile' || item.route === '/my-favorites') {
            if(userId) {
              item.route = `${item.route}/${userId}`
            } else {
              return null;
            }
          }

          return (
            <Link
              key={item.label}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg font-bold text-white"
                  : "hover:primary-gradient hover:rounded-lg hover:font-bold dark:text-white hover:dark:text-white"
              } flex items-center justify-start gap-3 p-4`}
            >
              <Image 
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />

              <p className="max-lg:hidden">{item.label}</p>
            </Link>
          )
        })}
      </div>

    </section>
  )
}

export default LeftSidebar