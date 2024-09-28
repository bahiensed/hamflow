import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import RenderTag from './RenderTag';
import { getHotQuestions } from '@/lib/actions/question.action';
import { getTopPopularTags } from '@/lib/actions/tag.actions';

const RightSidebar = async () => {
  const hotQuestions = await getHotQuestions();
  const popularTags = await getTopPopularTags();

  return (
    <section className="custom-scrollbar sticky flex h-screen w-[320px] flex-col gap-8 overflow-y-auto bg-white px-5 pt-24 dark:bg-slate-950 max-xl:hidden">
      <div>
        <h3 className="font-spaceGrotesk text-2xl font-medium tracking-tighter text-dark-100 dark:text-white">
          Top Questions
        </h3>
        <div className="mt-6 flex flex-1 flex-col gap-5">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className='flex cursor-pointer items-center justify-between gap-4'
            >
              <p className="body-medium text-dark500_light700">{question.title}</p>
              <Image 
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={24}
                height={24}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-spaceGrotesk text-2xl font-medium tracking-tighter text-dark-100 dark:text-white">
          Popular Tags
        </h3>
        <div className="mt-6 flex flex-1 flex-col gap-5">
          {popularTags.map((tag) => (
            <RenderTag 
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RightSidebar;
