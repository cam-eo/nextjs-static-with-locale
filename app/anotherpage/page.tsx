"use client";
import { Button, Center } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // preserve locale from external source
  const params = new URLSearchParams(searchParams.toString());

  return (
    <div>
      <Center as="main" flexDirection="column" pt="20">
        <Button onClick={() => router.push(`/?${params.toString()}`)} mb="5">
          back
        </Button>
        <h1>Another NextJS Route</h1>
      </Center>
    </div>
  );
}
