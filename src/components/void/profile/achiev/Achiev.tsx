'use client'

import { Box, Flex, Text, IconButton, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import AchiveBlock from './AchiveBlock'
import { MdNavigateNext } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

export default function Achiev() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isOpen  = useDisclosure({ defaultOpen: true })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200
      const move = direction === 'left' ? -scrollAmount : scrollAmount
      scrollRef.current.scrollBy({ left: move, behavior: 'smooth' })
    }
  }

  return (
    <Box
      width='800px'
      height='auto'
      backgroundColor='#6D28D9'
      borderRadius={16}
      data-state={isOpen ? 'open' : 'closed'}
      _open={{
        animation: 'fade-in 500ms ease-out',
      }}
      padding='12px 150px'
      position='relative'
      overflow='hidden'
    >
      <Flex flexDirection='column' gap={4}>
        <Text fontSize='32px' fontWeight='600' color='white'>
          Достижения
        </Text>

        {/* Контейнер карусели */}
        <Flex position='relative' align='center' width='580px'>

          {/* Кнопка "влево" */}
          <IconButton
            aria-label='Scroll left'
            onClick={() => scroll('left')}
            position='absolute'
            left={-8}
            top='50%'
            transform='translateY(-50%)'
            zIndex={2}
            size='sm'
            colorScheme='purple'
            borderRadius='full'
          > <MdNavigateNext style={{ transform: 'rotate(180deg)' }}  /> </IconButton>

          {/* Контейнер с прокруткой */}
          <Flex
            ref={scrollRef}
            direction='row'
            gap='40px'
            overflowX='auto'
            padding='10px 20px'
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <AchiveBlock />
            <AchiveBlock />
            <AchiveBlock />

            <AchiveBlock />
            <AchiveBlock />
            <AchiveBlock />
            
            <AchiveBlock />
            <AchiveBlock />
            <AchiveBlock />
          </Flex>

          {/* Кнопка "вправо" */}
          <IconButton
            aria-label='Scroll right'
            onClick={() => scroll('right')}
            position='absolute'
            right={-8}
            top='50%'
            transform='translateY(-50%)'
            zIndex={2}
            size='sm'
            colorScheme='purple'
            borderRadius='full'
          > <MdNavigateNext /> </IconButton>
        </Flex>
      </Flex>

      {/* Иконка достижения, прижатая к левой части */}
      <Box 
        position='absolute'
        left='-70px'
        top='50%'
        transform='translateY(-50%)'
        zIndex={1}
      >
        <GiAchievement color='#A78AFAcc' size={180}/>
      </Box>
    </Box>
  )
}