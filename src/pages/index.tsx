import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Box bgImg="/topo.png" bgSize="cover" h="335px">
        <Flex maxW="1240px" mx="auto" justify="space-between" align="center" h="335px">
          <Box>
            <Heading as="h1" fontSize="36" color="gray.10" maxW="426px" mb="7">5 Continentes, infinitas possibilidades.</Heading>
            <Text as="p" fontSize="20" color="gray.75" maxW="524px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Box>
          <Image src="/airplane.png" alt="imagem de avião" mt="28" />
        </Flex>
      </Box>

    </>
  )
}
