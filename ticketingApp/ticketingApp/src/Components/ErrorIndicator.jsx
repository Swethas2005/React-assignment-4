// Packages
import React from "react";
import { useToast } from "@chakra-ui/react";

export default function ErrorIndicator() {
  const toast = useToast();
  return toast({
    title: "Something thing went wrong.",
    description: "Please try again or refresh the page.",
    status: "error",
    duration: 2000,
    isClosable: true,
  });
}
