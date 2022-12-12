import { Box, Link, Center, VStack, Text, Button } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import SmallWithLogoLeft from '../components/Footer'
import UploadAndDisplayImage from '../components/UploadAndDisplayImage'
import styles from '../styles/Home.module.css'

export default function Home() {

  const testFunction = async () => {
    const endpoint = 'https://api.runpod.ai/v1/stable-diffusion-v1/run/2bb3cba2-15eb-41d4-b54b-414416d7910f';

    // Set the API key and input data
    const apiKey = 'TZGE6NATUCJTCKKVTYG77S2LSN57LE52DVEDQDQL';
    const inputData = {
      input: {
        prompt: 'My creative vision.',
      },
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TZGE6NATUCJTCKKVTYG77S2LSN57LE52DVEDQDQL',
    };
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: headers,
    })
  }
  return (
    <Box >
      <VStack m={10} spacing='20px' minHeight='900px'>
        <Text>Stable Diffusion App</Text>

        <Link href='https://buy.stripe.com/test_eVa3fZ562gYL34s4gg' isExternal>
          <Center as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
            purchase now
          </Center>
        </Link>
        <Button onClick={testFunction}>
          test runpod serverless API
        </Button>
      </VStack>

      <SmallWithLogoLeft />
    </Box>
  )
}
