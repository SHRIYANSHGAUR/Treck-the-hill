import { Center, Img } from "@chakra-ui/react";

function Loader() {
  return (
      <Center width={'100%'} height={'100vh'}>
          <Img src='/loader.gif' alt='pre-loader'/>
      </Center>
  );
}

export default Loader;
