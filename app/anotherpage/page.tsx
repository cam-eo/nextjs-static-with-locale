"use client";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // preserve locale from external source
  const params = new URLSearchParams(location.search);

  return (
    <div>
      <Center as="main" flexDirection="column" pt="20">
        <Button onClick={() => navigate(`/?${params.toString()}`)} mb="5">
          back
        </Button>
        <h1>Another NextJS Route</h1>
      </Center>
    </div>
  );
}
