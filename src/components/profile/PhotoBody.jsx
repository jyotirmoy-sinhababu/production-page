import {
  GridItem,
  Image,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';

import { useState } from 'react';

const PhotoBody = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data);

  // const [open, setOpen] = useState(false);
  // const [index, setIndex] = useState(-1);

  return (
    <>
      {' '}
      <GridItem
        cursor={'pointer'}
        borderRadius={4}
        overflow={'hidden'}
        border={'1px solid'}
        borderColor={'whiteAlpha.300'}
        position={'relative'}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={'blackAlpha.700'}
          transition={'all 0.3s ease'}
          zIndex={1}
          justifyContent={'center'}
        ></Flex>

        <Image
          src={data?.imageURL}
          alt='profile post'
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
          rounded={'15px'}
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: '3xl', md: '5xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'gray.800'} pb={5}>
            <Flex
              gap='4'
              w={{ base: '90%', sm: '70%', md: 'full' }}
              mx={'auto'}
              maxH={'90vh'}
              minH={'50vh'}
            >
              <Flex
                borderRadius={4}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}
                flex={1.5}
                justifyContent={'center'}
                alignItems={'center'}
              >
                {<Image src={data?.imageURL} alt='profile post' />}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={data?.imageURl}
      /> */}
    </>
  );
};

export default PhotoBody;
