//TODO: FINISH THIS

import Image from 'next/image';
import Link from 'next/link';

import { getCurrentUser } from '@/lib/session';
import AuthProviders from './AuthProviders';

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="text-center grid grid-cols-3">
      <div></div>
      <div>
        supa<span className="text-secondary">goal</span>
      </div>
      <div className="text-xl text-white text-right">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                width={40}
                height={40}
                alt={session.user.name}
              />
            )}
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
