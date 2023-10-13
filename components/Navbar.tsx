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
    <nav className="text-center grid grid-cols-3">
      <div></div>
      <div className="text-primary">
        supa<span className="text-secondary">goal</span>
      </div>
      <NavProfile session={session} />
    </nav>
  );
};

export default Navbar;
