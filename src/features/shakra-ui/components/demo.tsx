import { Button, HStack } from "@chakra-ui/react";

export const ShakraDemo = () => {
  return (
    <HStack>
      <Button colorScheme="teal" size="xs">
        teal xs-small
      </Button>
      <Button colorScheme="blue" size="sm">
        blue small
      </Button>
      <Button colorScheme="purple" size="md">
        purple medium
      </Button>
      <Button colorScheme="pink" size="lg">
        pink large
      </Button>
    </HStack>
  );
};
