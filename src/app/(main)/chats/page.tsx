import React from 'react'
import styles from './chats.module.scss'
import ChatsList from '@/components/void/chatsList/chatsList'
import { moksChats } from './moks'

export default function ChatsPage() {
  return (
    <div className={`${styles.main}`}>
        <ChatsList
          chats={moksChats}
        />
    </div>
  )
}
