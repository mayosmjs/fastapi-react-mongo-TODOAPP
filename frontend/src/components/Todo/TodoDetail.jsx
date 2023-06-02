import {
    Button,
    Center,
    Container,
    Spinner,
    Text,
    useColorModeValue,
    useToast,
  } from "@chakra-ui/react";
  import { useEffect, useRef, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import axiosInstance from "../../services/axios";
  import { TodoModal } from "./TodoModal";
  
  export const TodoDetail = () => {
    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(true);
    const isMounted = useRef(false);
    const { todoId } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    // const background = useColorModeValue("gray.300", "gray.700");
    const background = useColorModeValue('linear(to-r, gray.600, blue.900)','linear(to-r, gray.600, blue.900)',)

    const fetchTodo = () => {
      setLoading(true);
      axiosInstance
        .get(`/todo/${todoId}`)
        .then((res) => {
          setTodo(res.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    };

    const delateTodo = () => {
      setLoading(true);
      axiosInstance
        .delete(`/todo/${todoId}`)
        .then(() => {
          toast({
            title: "Todo deleted successfully",
            status: "success",
            isClosable: true,
            diration: 1500,
          });
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          toast({
            title: "Could'nt delete todo",
            status: "error",
            isClosable: true,
            diration: 2000,
          });
        })
        .finally(() => setLoading(false));
    };
  
    
    useEffect(() => {
      if (isMounted.current) return;
      fetchTodo();
      isMounted.current = true;
    }, [todoId]);
  
    
  
  
    if (loading) {
      return (
        <Container mt={6}>
          <Center mt={6}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="green.200"
              color="green.500"
              size="xl"
            />
          </Center>
        </Container>
      );
    }
  
    return (
      <>
        <Container mt={6}>
          <Button
            colorScheme="slate"
            variant={"ghost"}
            onClick={() => navigate("/", { replace: true })}
          >
            Back
          </Button>
        </Container>
        <Container
          bgGradient={background}
          minHeight="7rem"
          my={3}
          p={3}
          rounded="lg"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={22}>{todo.title}</Text>
          <Text bg="gray00" mt={2} p={2} rounded="lg">
            {todo.description}
          </Text>
          <TodoModal
            my={3}
            editable={true}
            defaultValues={{
              title: todo.title,
              description: todo.description,
              status: todo.status,
            }}
            onSuccess={fetchTodo}
          />
          <Button
            isLoading={loading}
            colorScheme="red"
            width="100%"
            variant={"ghost"}
            onClick={delateTodo}
          >
            Delete
          </Button>
        </Container>
      </>
    );
  };