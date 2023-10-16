'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getCurrentUser } from '@/lib/session';
import AuthProviders from './AuthProviders';
import { signOut } from 'next-auth/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { SessionInterface } from '@/common.types';

const NavProfile = ({ session }: { session: SessionInterface }) => {
  return (
    <div className="text-xl ml-auto mt-1 mr-1">
      {session?.user ? (
        <>
          {session?.user?.image && (
            <>
              {/* <Link href={`/profile/${session?.user?.id}`}> */}
              <NavigationMenu className="p-1">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
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
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="text-lg font-normal text-primary grid auto-rows-auto p-2 whitespace-nowrap ">
                      <Link href="/profile">
                        <NavigationMenuLink>profile</NavigationMenuLink>
                      </Link>
                      <NavigationMenuLink>daily</NavigationMenuLink>
                      <NavigationMenuLink>edit</NavigationMenuLink>
                      <NavigationMenuLink>view</NavigationMenuLink>
                      <div className="h-4"></div>
                      <NavigationMenuLink>sign out</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/* </Link> */}
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
