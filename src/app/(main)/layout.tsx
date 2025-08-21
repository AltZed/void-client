import { Provider } from "@/components/ui/provider";
import Sidebar from "@/components/void/sidebar/sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        height="100vh"
        overflow="hidden"
      >
        {/* Боковая панель */}
        <Sidebar />

        {/* Основная страница */}
        <Box
          flex="1"
          overflow="auto"
          minHeight="0" // Важно для корректного скролла
        >
          {children}
        </Box>
      </Flex>
    </Provider>
  );
}