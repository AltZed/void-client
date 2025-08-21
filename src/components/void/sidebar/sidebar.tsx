"use client"

import React from 'react';

// иконки
import { FaRegNewspaper } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { PiChats } from "react-icons/pi";
import { MdOutlineReportProblem } from "react-icons/md";

import styles from './sidebar.module.scss';
import Link from 'next/link';

export default function Sidebar() {

  const iconSize = 24;

  return (
    <div className={styles.sidebarMain}>
      <div className={styles.iconContainer}>
        <Link href="/news"><FaRegNewspaper size={iconSize}/></Link>
        <Link href="/chats"><PiChats size={iconSize}/></Link>
        <Link href="/settings"><IoMdSettings size={iconSize}/></Link>
        <Link href="/report"><MdOutlineReportProblem size={iconSize}/></Link>
      </div>
    </div>
  );
}