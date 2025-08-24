import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Achiev() {
  return (
    <Box
      width='800px'
      height='200px'
      backgroundColor='#6D28D9'
      borderRadius={16}

      data-state="open"
      _open={{
        animation: "fade-in 500ms ease-out",
      }}
    >

    </Box>
  )
}
