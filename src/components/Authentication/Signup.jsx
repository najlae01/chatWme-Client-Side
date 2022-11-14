import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
  FormHelperText,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
  useToast,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faLock,
  faUser,
  faCamera,
  faArrowCircleRight,
} from '@fortawesome/fontawesome-free-solid'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../actions/AuthAction'

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  const dispatch = useDispatch()

  const toast = useToast()

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  //const postDetails = (pic) => {}

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setData({
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (data.password === data.confirmpassword) {
      dispatch(signUp(data))
      resetForm()
    } else {
      toast({
        title: 'Passwords do not match',
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
      })
      resetForm()
    }
  }

  //const { loading } = useSelector((state) => state.register)

  return (
    <>
      <form onSubmit={submitHandler}>
        <VStack spacing={'12px'}>
          <FormControl id='username' isRequired>
            <FormLabel color='#fff'>Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <FontAwesomeIcon
                    icon={faUser}
                    size='sm'
                    color='var(--gray)'
                  />
                }
              />
              <Input
                type={'text'}
                backgroundColor={'var(--selected)'}
                placeholder='Username'
                name='username'
                value={data.username}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl id='email' isRequired>
            <FormLabel color='#fff'>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size='sm'
                    color='var(--gray)'
                  />
                }
              />
              <Input
                type={'email'}
                backgroundColor={'var(--selected)'}
                placeholder='Email'
                name='email'
                value={data.email}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl id='password' isRequired>
            <FormLabel color='#fff'>Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <FontAwesomeIcon
                    icon={faLock}
                    size='sm'
                    color='var(--gray)'
                  />
                }
              />
              <Input
                type={show ? 'text' : 'password'}
                backgroundColor={'var(--selected)'}
                placeholder='Password'
                name='password'
                value={data.password}
                onChange={handleChange}
              />
              <InputRightElement width={'4rem'}>
                <Button colorScheme={'var(--selected)'} onClick={handleClick}>
                  {show ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      size='sm'
                      color='var(--gray)'
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      size='sm'
                      color='var(--gray)'
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id='confirmpassword' isRequired>
            <FormLabel color='#fff'>Confirm Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <FontAwesomeIcon
                    icon={faLock}
                    size='sm'
                    color='var(--gray)'
                  />
                }
              />
              <Input
                type={show ? 'text' : 'password'}
                backgroundColor={'var(--selected)'}
                placeholder='Confirm Password'
                name='confirmpassword'
                value={data.confirmpassword}
                onChange={handleChange}
              />
              <InputRightElement width={'4rem'}>
                <Button colorScheme={'var(--selected)'} onClick={handleClick}>
                  {show ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      size='sm'
                      color='var(--gray)'
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      size='sm'
                      color='var(--gray)'
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {/*<FormControl id='pic'>
          <FormLabel color='#fff'>Avatar</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={
                <FontAwesomeIcon
                  icon={faCamera}
                  size='sm'
                  color='var(--gray)'
                />
              }
            />
            <Input
              type='file'
              backgroundColor={'var(--selected)'}
              placeholder='Username'
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </InputGroup>
        </FormControl>*/}
          <Button
            colorScheme={'var(--selected)'}
            _hover={{
              color: 'var(--hoverText)',
              bg: 'var(--selected)',
            }}
            //isLoading={loading}
            borderLeftRadius='2rem'
            fontSize={'1.5rem'}
            color={'var(--selectedText)'}
            variant='ghost'
            bgColor={'var(--selected)'}
            type='submit'
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem 0.7rem 1.5rem 1.5rem',
              marginLeft: '27rem',
            }}
            rightIcon={<FontAwesomeIcon icon={faArrowCircleRight} size='1x' />}
          >
            Sign Up
          </Button>
        </VStack>
      </form>
    </>
  )
}

export default Signup
