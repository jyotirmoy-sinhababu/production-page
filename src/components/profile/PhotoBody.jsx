import {
  Image,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

const PhotoBody = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {' '}
      <Flex
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
          _hover={{ opacity: 0.5 }}
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={'blackAlpha.700'}
          transition={'all 0.3s ease'}
          zIndex={1}
          justifyContent={'center'}
        >
          {data?.caption}
        </Flex>

        <Image
          src={data?.imageURL}
          alt='profile post'
          w={'100%'}
          h={'100%'}
          rounded={'15px'}
          fit={'cover'}
        />
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: '3xl', md: '5xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={'white'} />
          <ModalBody bg={'gray.800'} pb={5}>
            <Flex
              gap='4'
              w={{ base: '90%', sm: '70%', md: 'full' }}
              mx={'auto'}
              maxH={'fitContent'}
              minH={'fitContent'}
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
                {
                  <Image
                    src={data?.imageURL}
                    alt='profile post'
                    fit={'contain'}
                    w={'100%'}
                    h={'100%'}
                  />
                }
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PhotoBody;
