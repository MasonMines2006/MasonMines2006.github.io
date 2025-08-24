import { HStack, Link } from "@chakra-ui/react";

const References = () => {
  return (
    <div>
      <HStack spaceX={4}>
        <Link href="" textStyle="md" fontWeight="bold">
          About
        </Link>
        <Link href="" textStyle="md" fontWeight="bold">
          Projects
        </Link>
        <Link href="" textStyle="md" fontWeight="bold">
          Connect
        </Link>
      </HStack>
    </div>
  );
};

export default References;
