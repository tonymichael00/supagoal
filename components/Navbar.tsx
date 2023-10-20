//TODO: FINISH THIS

import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import HamMenu from './HamMenu/HamMenu';
// import avatarBlank from '@/public/avatarBlank.svg';

import { getCurrentUser } from '@/lib/session';
import AuthProviders from './AuthProviders';
import { signOut } from 'next-auth/react';
import NavProfile from './NavProfile';

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <div className="text-center grid grid-cols-[1fr_auto_1fr]">
      <Link
        href="/"
        className="col-start-2"
      >
        <h1>
          <span className="text-secondary">supa</span>
          <span className="text-primary">goal</span>
        </h1>
      </Link>
      <NavProfile session={session} />
    </div>
  );
};

export default Navbar;
