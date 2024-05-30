// Packages
import React from "react";
import { Spinner } from "@chakra-ui/react";

export default function LoadingIndicator() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px"}}>
      <Spinner
        thickness="6px"
        speed="0.4s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </div>
  );
}
