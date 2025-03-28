"use client";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { useLocale } from "./useLocale";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const changeLang = (lang: string) => {
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  const lang = searchParams.get("lang");
  const t = useLocale(lang as string);

  return (
    <div>
      <Center as="main" w="full" flexDirection="column" pt="20">
        <Button
          onClick={() => router.push(`anotherpage/?${params.toString()}`)}
          mb="5"
        >
          to another page
        </Button>
        <Flex mb="5" gap="1">
          <Button onClick={() => changeLang("en")}>en</Button>
          <Button onClick={() => changeLang("nl")}>nl</Button>
        </Flex>
        <Text fontSize="xl">{t?.title}</Text>
      </Center>
    </div>
  );
}
