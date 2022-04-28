import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

export default function NavBar() {
  const [navSize, setNavSize] = useState('large')
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == 'small' ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      backgroundColor="red.200"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-end" as="nav">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          aria-label="botao"
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == 'small') setNavSize('large')
            else setNavSize('small')
          }}
        />
      </Flex>
      <Flex p="5%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center": "flex-start"} mb={4}>
        <Divider display={navSize == "small" ? "none": "flex"} />
        <Flex mt="4" align="center">
          <Avatar size="sm" src="" />
          <Flex flexDirection="column" ml="4" display={navSize == "small" ? "none": "flex"}>
            <Heading as="h3" size="sm">
              Silvio
            </Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
