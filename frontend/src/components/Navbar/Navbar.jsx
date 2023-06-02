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

    const date = new Date();
    const year = date.getFullYear();
    const month= date.getMonth();
    const day  = date.getDate();

    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];


    const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
      .toString()
      .padStart(2, "0")}`;


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
          <time>{todayDate}</time>

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