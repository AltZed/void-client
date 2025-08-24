'use client'

import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import SvgLogo from '../../../../public/logo.svg'

import { usePathname } from 'next/navigation'
import { IconRender } from './iconRender'


export default function SideBar() {
   const isMobile = useBreakpointValue({ base: true, md: false })
   
  const pathname = usePathname()
  return (
    <Flex 
          direction={isMobile ? 'row' : 'column'}
          height={isMobile? '0%' : '100%'}
          alignItems='center'
          justifyContent={isMobile ? 'center' : ''}
    >
        
        <Box
          hidden={isMobile? true : false}
          marginBottom={100}
        >
          <Image src={SvgLogo} alt='logo' />
        </Box>

        <Box>
          <Flex 
              direction={isMobile ? 'row' : 'column'}
              height={isMobile? '0%' : '50%'}
              justifyContent={isMobile ? 'center' : 'space-between'}
              alignItems='center'
              gap='30px'
          >

            {IconRender(pathname, 38)}

          </Flex>
        </Box>
    </Flex>
  )
}
