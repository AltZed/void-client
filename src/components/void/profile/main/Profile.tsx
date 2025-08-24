'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ProgressBar from './ProgressBar'
import { RiAccountPinCircleLine } from 'react-icons/ri'

export default function Profile() {

  const mainBlockWidth: number = 800

  return (
    <Box
      width={`${mainBlockWidth}px`}
      height='200px'
      backgroundColor='#6D28D9'
      borderRadius={16}
      data-state="open"
      _open={{
        animation: "fade-in 300ms ease-out",
      }}
      padding='12px 16px'
      position='relative'
      overflow='hidden'
    >
      
      <Flex
        flexDirection='row'
        gapX='20px'
      >

        {/* Блок с аватаркой */}
        <Box>
          <Box
            overflow="hidden"
            position='relative'
            display='inline-block'
          >
            {/* Уровень */}
            <Box
              position='absolute'
              right='0'
              width='36px'
              height='36px'
              backgroundColor='#FFF'
              borderRadius='full'
              display='flex'
              justifyContent='center'
              alignItems='center'
              color='#6D28D9'
              fontWeight='800'
              borderColor='#6D28D9'
              borderWidth='3px'
            >
              21
            </Box>
            <Image
              src='/test.png'
              alt='avatar'
              width={172}
              height={172}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </Box>
        </Box>

        {/* Информация пользователя */}
        <Box
            width={`${mainBlockWidth/1.5}px`}
        >
          <Flex
            flexDirection='column'
            justifyContent='space-between'
            height='100%'
          >
              <Text
                fontSize='42px'
                lineHeight='1em'
                fontWeight='600'
              >
                Nickname
              </Text>
              <Box>
                <Text fontWeight='600' lineHeight='1em' fontSize='20px'>Почта: nickname@abyss</Text>
              </Box>

              <Box  fontWeight='600' lineHeight='1em' fontSize='20px' display='flex' alignContent='center'>
                Подписка: <Text  background="linear-gradient(90deg, #E9B308 0%, #FFD700 100%)" borderRadius='6px' padding='3px' color='black' marginLeft='6px' fontSize='16px'>Premium</Text>
              </Box>

              <Box>
                  <Text  fontWeight='600' fontSize='10px' marginBottom='4px'>Прогресс уровня:</Text>
                <ProgressBar />
              </Box>
          </Flex>
        </Box>

      </Flex>
      
      {/* SVG иконка, выпирающая на половину */}
      <Box 
        position='absolute'
        right='-70px'
        top='50%'
        transform='translateY(-50%)'
        zIndex={1}
      >
        <RiAccountPinCircleLine color='#A78AFAcc' size={180}/>
      </Box>

    </Box>
  )
}