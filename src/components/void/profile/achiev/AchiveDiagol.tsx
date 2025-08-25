'use client'; 
import React from 'react'
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  Portal,
} from "@chakra-ui/react"

import { mdiSpaceInvaders } from '@mdi/js';
import Icon from '@mdi/react';

export default function AchiveDiagol() {
  return (
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>New user</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Flex
                      flexDirection='column'
                      justifyContent='center'
                      alignItems='center'
                    >
                       <Icon path={mdiSpaceInvaders} size='52px' color='#FFF' />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </p>
                    </Flex>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Закрыть</Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
  )
}
