import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW={'1280px'}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
