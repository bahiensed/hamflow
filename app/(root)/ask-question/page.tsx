import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server'; // Use auth instead of getAuth

import Question from '@/components/forms/Question';
import { getUserById } from '@/lib/actions/user.actions';

const AskQuestion = async () => {
  const { userId } = auth(); // Use auth instead of getAuth

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask Question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default AskQuestion;
