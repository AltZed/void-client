'use client'; 

import { Button, Dialog, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import Icon from '@mdi/react';
import { mdiSpaceInvaders } from '@mdi/js';
import AchiveDiagol from './AchiveDiagol';

export default function AchiveBlock() {

  return (
    <Flex
      flexDirection='column'
      backgroundColor='#A78AFA'
      borderRadius='8px'
      padding='5px 20px'
      justifyContent='center'
      alignItems='center'
      gapY='10px'
    >
        <Icon path={mdiSpaceInvaders} size='52px' color='#FFF' />
        <Text fontSize='15px' fontWeight='600'>New user</Text>

        <Dialog.Root size='md'>
           <Dialog.Trigger asChild>
              <Button 
                borderRadius='7px' 
                borderColor='#FFF' 
                colorPalette='purple' 
                variant='outline' 
                color='#FFF'
                _hover={{backgroundColor: '#6D28D9'}}
                >
                Подробнее
              </Button>
            </Dialog.Trigger>
            <AchiveDiagol />
        </Dialog.Root>
    </Flex>
  )
}
