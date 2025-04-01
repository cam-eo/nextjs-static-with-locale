"use client";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { type Locales, useLocaleStore } from "../store";

// @ts-expect-error - fix later
export default function Home({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const params = new URLSearchParams(location.search);
  const changeLang = (lang: string) => {
    params.set("lang", lang);
    navigate(`${pathname}?${params.toString()}`);
  };

  const lang = params.get("lang");

  const t = useLocaleStore((state) => state.locales[lang as keyof Locales]);

  return (
    <Center as="main" w="full" flexDirection="column" pt="20">
      <Text>Name: {data?.name}</Text>
      <Button
        mb="5"
        onClick={() => navigate(`anotherpage/?${params.toString()}`)}
      >
        to another page
      </Button>
      <Flex mb="5" gap="1">
        <Button onClick={() => changeLang("en")}>en</Button>
        <Button backgroundColor={data?.color} onClick={() => changeLang("nl")}>
          nl
        </Button>
      </Flex>
      <Text fontSize="xl">{t?.title}</Text>
    </Center>
  );
}
