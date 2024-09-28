import Image from 'next/image';
import { Input } from '@/components/ui/input';

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[512px] max-lg:hidden">
      <div className="relative flex min-h-[48px] grow items-center gap-1 rounded-xl border border-slate-300 bg-slate-100 px-4 dark:border-slate-700 dark:bg-slate-900">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search questions, categories, answers, colleagues, etc."
          value=""
          className="paragraph-regular no-focus placeholder border-none bg-transparent text-base text-slate-500 shadow-none outline-none"
        />
      </div>
    </div>
  )
}

export default GlobalSearch;
