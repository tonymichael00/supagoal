'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getCurrentUser } from '@/lib/session';
import AuthProviders from './AuthProviders';
import { signOut } from 'next-auth/react';

import { SessionInterface } from '@/common.types';

const NavProfile = ({ session }: { session: SessionInterface }) => {
  return (
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
  );
};

export default NavProfile;
