//TODO: FINISH THIS

import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import HamMenu from './HamMenu/HamMenu';
// import avatarBlank from '@/public/avatarBlank.svg';

import { getCurrentUser } from '@/lib/session';
import AuthProviders from './AuthProviders';
import { signOut } from 'next-auth/react';

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="text-center grid grid-cols-3">
      <div></div>
      <div className="text-primary">
        supa<span className="text-secondary">goal</span>
      </div>
      <div className="text-xl text-white ml-auto">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <>
                <Link href={`/profile/${session?.user?.id}`}>
                  <Avatar>
                    <AvatarImage
                      className="ml-auto"
                      src={session.user.image}
                      width={40}
                      height={40}
                      alt={session.user.name}
                    />
                    <AvatarFallback>
                      <img
                        src="/avatarBlank.svg"
                        alt="Blank Avatar"
                      />
                    </AvatarFallback>
                  </Avatar>
                </Link>
                {/* <HamMenu /> */}
                <button
                  className="text-sm"
                  // onClick={signOut}
                ></button>
              </>
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
