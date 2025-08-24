import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function ProgressBar({ percentage = 58, maxWidth = 400 }) {
  return (
    <Box width="100%" maxWidth={`${maxWidth}px`} height='20px'>
      {/* Контейнер прогресс бара */}
      <Box
        position="relative"
        height="24px"
        backgroundColor="#6D28D9" // Цвет пустой части
        borderRadius="12px"
        border="2px solid #A78AFA" // Обводка
        overflow="hidden"
      >
        {/* Заполненная часть */}
        <Box
          height="100%"
          width={`${percentage}%`}
          backgroundColor="#A78AFA" // Цвет заполненной части
          borderRadius="12px"
          transition="width 0.3s ease"
        />
        
        {/* Текст с процентами */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="12px"
            fontWeight="bold"
            color="white"
            textShadow="0px 0px 2px rgba(0,0,0,0.5)"
          >
            {percentage}%
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}