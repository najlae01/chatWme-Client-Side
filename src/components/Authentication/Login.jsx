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
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faLock,
  faUser,
  faArrowCircleRight,
} from '@fortawesome/fontawesome-free-solid'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions/AuthAction'
import { useNavigate} from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const resetForm = () => {
    setData({
      username: '',
      password: '',
    })
  }

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(logIn(data))
    resetForm()
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

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
          <Button
            colorScheme={'var(--selected)'}
            _hover={{
              color: 'var(--hoverText)',
              bg: 'var(--selected)',
            }}
            type='submit'
            borderLeftRadius='2rem'
            fontSize={'1.5rem'}
            color={'var(--selectedText)'}
            variant='ghost'
            bgColor={'var(--selected)'}
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem 0.7rem 1.5rem 1.5rem',
              marginLeft: '28rem',
            }}
            rightIcon={<FontAwesomeIcon icon={faArrowCircleRight} size='1x' />}
          >
            Log In
          </Button>
        </VStack>
      </form>
    </>
  )
}

export default Login
