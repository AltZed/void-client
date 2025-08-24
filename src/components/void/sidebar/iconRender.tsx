'use client'

import Link from 'next/link'

import { RiAccountPinCircleLine, RiGroup2Line } from "react-icons/ri";
import { PiChatsTeardropFill } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaShoppingBasket, FaBug } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { ReactNode } from 'react';


interface HrefItem {
  href: string;
  icon: ReactNode;
}


export function IconRender(pathname: string, size: number) {
  
  const colorActive = '#FFF';
  const colorPassive = '#A78AFA';
  
  

  const hrefs: HrefItem[] = [
    {
      href: '/profile',
      icon: <RiAccountPinCircleLine size={size} color={pathname == '/profile' ? colorActive : colorPassive} />
    },
    // {
    //   href: '/friends',
    //   icon: <RiGroup2Line size={size} color={pathname == '/friends' ? colorActive : colorPassive} />
    // },
    {
      href: '/chats',
      icon: <PiChatsTeardropFill size={size} color={pathname == '/chats' ? colorActive : colorPassive} />
    },
    // {
    //   href: '/news',
    //   icon: <HiOutlineNewspaper size={size} color={pathname == '/news' ? colorActive : colorPassive} />
    // },
    // {
    //   href: '/market',
    //   icon: <FaShoppingBasket size={size} color={pathname == '/market' ? colorActive : colorPassive} />
    // },
    {
      href: '/settings',
      icon: <IoSettingsSharp size={size} color={pathname == '/settings' ? colorActive : colorPassive} />
    },
    // {
    //   href: '/bug',
    //   icon: <FaBug size={size} color={pathname == '/bug' ? colorActive : colorPassive} />
    // }
  ];
  
  return (
    <>
      {hrefs.map((item: HrefItem, index: number) => {
        return (
          <Link key={index} href={item.href}>
            {item.icon}
          </Link>
        )
      })}
    </>
  );
}