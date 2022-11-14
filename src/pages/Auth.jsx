import React from 'react'
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  useToast,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const Auth = () => {
  const toast = useToast()
  const { success, error } = useSelector((state) => state.auth)
  return (
    <Container maxW='5xl' maxH='xl' marginTop={'7rem'}>
      {success &&
        toast({
          title: 'Signed in successfully.',
          status: 'success',
          isClosable: true,
          position: 'bottom-right',
        })}

      {error &&
        toast({
          title: error,
          status: 'error',
          isClosable: true,
          position: 'bottom-right',
        })}
      <HStack>
        <Container w={'50%'} marginTop={'4rem'}>
          <FontAwesomeIcon
            icon={faTwitter}
            size='10x'
            color='var(--box)'
            style={{ marginLeft: '1rem' }}
          />
          <Text
            fontWeight={'extrabold'}
            fontSize={'4xl'}
            bgColor='blue'
            bgImage={'var(--buttonBg)'}
            style={{
              backgroundSize: '100%',
              backgroundRepeat: 'repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Chat-W-me
          </Text>
        </Container>
        <Container w={'100%'} centerContent>
          <Box
            p={4}
            bg={'var(--box)'}
            w='100%'
            borderRadius='2rem'
            borderWidth={'1px'}
          >
            <Tabs isFitted variant='soft-rounded' mb={'1em'}>
              <TabList>
                <Tab
                  color='var(--htext)'
                  fontSize={'2xl'}
                  _selected={{
                    color: 'var(--selectedText)',
                    bg: 'var(--selected)',
                  }}
                  _hover={{
                    color: 'var(--hoverText)',
                    bg: 'var(--hover)',
                  }}
                >
                  Login
                </Tab>
                <Tab
                  color='var(--htext)'
                  fontSize={'2xl'}
                  _selected={{
                    color: 'var(--selectedText)',
                    bg: 'var(--selected)',
                  }}
                  _hover={{
                    color: 'var(--hoverText)',
                    bg: 'var(--hover)',
                  }}
                >
                  Sign Up
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </HStack>
    </Container>
  )
}

export default Auth
