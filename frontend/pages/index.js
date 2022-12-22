import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack,
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
const inter = Inter({ subsets: ['latin'] })
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState();
  const [loading, updateLoading] = useState();
  const [id, setId] = useState();
  const [link, setLink] = useState();

  const generate = async (prompt) => {
    updateLoading(true);
    const result = await axios.post(`http://127.0.0.1:8000/sd?prompt=${prompt}`)
    console.log(result.data.id);
    setId(result.data.id)
    updateImage(result.data);
    updateLoading(false);
    getImg()
  };

  const getImg = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/sd/?request_id=${id}`)
    console.log(result.data)
    setLink(result.data.output)
  }
  return (
    <>
      <Container>
        <Heading>Stable DIffusion🚀</Heading>
        <Text marginBottom={"10px"}>
          This react application leverages the model trained by Stability AI and
          Runway ML to generate images using the Stable Diffusion Deep Learning
          model. The model can be found via github here{" "}
          <Link href={"https://github.com/CompVis/stable-diffusion"}>
            Github Repo
          </Link>
        </Text>

        <Wrap marginBottom={"10px"}>
          <Input
            value={prompt}
            onChange={(e) => updatePrompt(e.target.value)}
            width={"350px"}
          ></Input>
          <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"}>
            Generate
          </Button>
        </Wrap>

        {loading ? (
          <Stack>
            <SkeletonCircle />
            <SkeletonText />
          </Stack>
        ) : image ? (
          <Image src={link} boxShadow="lg" />
        ) : null}
      </Container>
    </>
  )
}
