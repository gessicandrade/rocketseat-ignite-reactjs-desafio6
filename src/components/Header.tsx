import { Box, Flex, Image, Stack } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify="center">
      <Flex maxW="1240px" h="100px" align="center" width="100%" justify="center">
        <Image maxW="185px" src="/logo.png" alt="Logo" />
      </Flex>
    </Flex>
  )
}