import { Achiev, Profile, Wallet } from '@/components/void/profile'
import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function ProfilePage() {
  return (
    <Flex
      flexDirection='column'
      gap='32px'
    >

      {/* Основной блок */}
      <Profile />
      {/*  Достижения */}
      <Achiev />
      {/* Кошелёк*/}
      <Wallet />
    </Flex>
  )
}
