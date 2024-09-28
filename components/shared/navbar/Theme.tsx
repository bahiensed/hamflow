"use client"

import Image from 'next/image';
import { useTheme } from '@/context/ThemeProvider';
import { themes } from '@/constants';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === 'light' ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun" 
              width={24} 
              height={24}
              className="active-theme" 
            />
          ): (
            <Image 
              src="/assets/icons/moon.svg"
              alt="moon"
              width={18} 
              height={18}
              className="active-theme" 
            />
          )}
        </MenubarTrigger>

        <MenubarContent className="absolute -right-12 min-w-[128px] rounded border bg-light-900 py-1 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className='flex cursor-pointer items-center gap-1 p-2 focus:bg-slate-100 dark:focus:bg-slate-800'
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image 
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && 'active-theme'}`}
              />
              <p className={`body-semibold text-light-500 ${mode === item.value ? 'text-primary-500' : 'text-dark100_light900'}`}>{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme;
