"use client"

import { useState } from 'react'
import { 
  Box, 
  Flex, 
  Text, 
  Badge,
  VStack,
  Avatar,
  AvatarGroup 
} from '@chakra-ui/react'

interface IChat {
  id: number,
  name: string,
  avatar: string,
  lastMessage: string,
  online: boolean
}

interface IChatsListProps {
  chats: IChat[]
}

/**
 * Компонент для вывода списка чатов  
 */
export default function ChatsList({ chats }: IChatsListProps) {

  return (
    <Box
      width={{ base: "100%", md: "250px" }}
      height="100vh"
      backgroundColor="purple.950"

      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'purple.600',
          borderRadius: '24px',
        },
      }}
    >
      {chats.map(chat => (
        <Flex
          key={chat.id}
          width="100%"
          padding="12px"
          borderBottom="1px solid"
          borderColor="purple.800"
          _hover={{
            backgroundColor: 'purple.900',
            cursor: 'pointer'
          }}
          transition="background-color 0.2s"
          onClick={() => {
            alert('open')
          }}
        >
          {/* Аватар */}
          <AvatarGroup>
            <Avatar.Root>
              <Avatar.Fallback name={chat.name}/>
              <Avatar.Image src={chat.avatar}/>
            </Avatar.Root>
          </AvatarGroup>

          <Box position="relative" marginRight="12px">
            {/* Индикатор онлайн статуса */}
            {chat.online && (
              <Box
                position="absolute"
                bottom="0"
                right="0"
                width="12px"
                height="12px"
                backgroundColor="green.400"
                borderRadius="50%"
                border="2px solid"
              />
            )}
          </Box>

          {/* Информация о чате */}
          <VStack 
            align="start" 
            flex="1"
            minWidth="0"
          >
            {/* Имя и статус */}
            <Flex align="center" width="100%">
              <Text
                fontSize="14px"
                fontWeight="600"
                color="white"
                flex="1"
              >
                {chat.name}
              </Text>
              {chat.online && (
                <Badge 
                  colorScheme="green" 
                  fontSize="10px"
                  marginLeft="8px"
                >
                  в сети
                </Badge>
              )}
            </Flex>

            {/* Последнее сообщение */}
            <Text
              fontSize="13px"
              color="purple.300"
              width="100%"
            >
              {chat.lastMessage.length > 35 
                ? `${chat.lastMessage.substring(0, 35)}...` 
                : chat.lastMessage
              }
            </Text>
          </VStack>
        </Flex>
      ))}
    </Box>
  )
}