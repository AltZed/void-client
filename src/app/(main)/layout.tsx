"use client"
import { SideBar } from '@/components';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      height="100vh"
      overflow="hidden"
    >
      {/* Панель (Sidebar) */}
      <Box
        as="nav"
        display='flex'
        alignItems='center'
        justifyContent='center'
        width={isMobile ? '100%' : '100px'}
        height={isMobile ? '100px' : '100%'}
        bg="gray.800"
        color="white"
        p={4}
        order={isMobile ? 2 : 1} // На мобиле будет внизу
        flexShrink={0}
      >
        <SideBar/>
      </Box>

      {/* Основное содержимое */}
      <Box
        flex="1"
        order={isMobile ? 1 : 2} // На мобиле контент будет сверху
        overflow="auto"
        p={4}
      >
        {children}
      </Box>
    </Flex>
  );
}