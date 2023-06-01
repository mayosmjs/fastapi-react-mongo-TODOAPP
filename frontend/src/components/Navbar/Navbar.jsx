import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { Outlet } from "react-router-dom";
  import { useAuth } from "../../hooks/useAuth";
  import { ThemeToggler } from "../Theme/ThemeToggler";
  import { Icon } from '@chakra-ui/react'
  
  export const NavBar = () => {
    const { logout } = useAuth();
    return (
      <Box minHeight="100vh">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1rem"
          // bg={useColorModeValue("purple.700", "purple.900")}
          bgGradient={useColorModeValue('linear(to-r, purple.500, green.500)','linear(to-r, purple.500, green.500)',)}
          color="white"
        >
          <Text as="h2" fontSize={24} fontWeight="bold">
          <Icon /> TASKSAPP
          </Text>
          <Stack direction="row" align="center" spacing={4}>
            <ThemeToggler size="sm" />
            <Button variant={"ghost"}  onClick={logout} colorScheme="purple" size={"sm"} >
              Logout
            </Button>
          </Stack>
        </Flex>
        <Outlet />
      </Box>
    );
  };