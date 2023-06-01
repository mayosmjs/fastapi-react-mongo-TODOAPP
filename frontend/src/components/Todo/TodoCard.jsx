import { Badge, Flex, Text, useColorModeValue ,Box,Image,AspectRatio,Stack,Link,Button} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  return (
     <div>
       <Flex
          bg={useColorModeValue("gray.300", "gray.700")}
          minHeight="3rem"
          my={3}
          p={3}
          rounded="sm"
          alignItems="center"
          justifyContent="space-between"
          _hover={{
            opacity: 0.9,
            cursor: "pointer",
            transform: "translateY(-3px)",
          }}
          onClick={() => navigate(`/${todo.todo_id}`, { replace: true })}
        >
      <Text>{todo.title}</Text>
      <Box as='span' color='yellow.600' fontSize='sm'>12/03/2023</Box>
      <Badge colorScheme={todo.status ? "green" : "purple"} rounded={"md"}>
        {todo.status ? "Complete" : "Pending"}
      </Badge>
    </Flex>
     
     </div>
  );



};