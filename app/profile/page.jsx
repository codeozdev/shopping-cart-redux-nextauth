import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import SignOut from '@/components/SignOut'
import Image from 'next/image'

export default async function ProfilePage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  // console.log(session.user)

  return (
    <div className='container h-[calc(100vh-230px)]'>
      <div className='flex flex-col items-center justify-center gap-5 h-full'>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt='img'
            width={500}
            height={500}
            priority={true}
            className='object-cover w-[150px] h-[150px] rounded-full'
          />
        )}

        <h2>{session?.user?.name}</h2>
        <div className='sm:text-lg'>{session?.user?.email}</div>
        <SignOut />
      </div>
    </div>
  )
}
