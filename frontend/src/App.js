import { Flex, Spinner } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Authenticated } from "./components/auth/Authenticated";
import { Login } from "./components/auth/Login";
import { PublicRoute } from "./components/auth/PublicRoute";
import { Register } from "./components/auth/Register";
import { AuthConsumer, AuthProvider } from "./context/jwtauth";
import {NavBar} from "./components/Navbar/Navbar"
import { TodoList } from "./components/Todo/TodoList";
import { TodoDetail } from "./components/Todo/TodoDetail";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <AuthConsumer>
            {(auth) =>
              !auth.isInitialized ? (
                <Flex
                  height="100vh"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="green.200"
                    color="green.500"
                    size="xl"
                  />
                </Flex>
              ) : (
                <Routes>
                  <Route
                    path="/login"
                    element={
                      <PublicRoute>
                        <Login />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <PublicRoute>
                        <Register />
                      </PublicRoute>
                    }
                  />
                  <Route path="/" element={<NavBar />}>
                    <Route
                      path="/"
                      element={
                        <Authenticated>
                          <TodoList />
                        </Authenticated>
                      }
                    />
                    <Route
                      path="/:todoId"
                      element={
                        <Authenticated>
                          <TodoDetail />
                        </Authenticated>
                      }
                    />
                  </Route>
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              )
            }
          </AuthConsumer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;