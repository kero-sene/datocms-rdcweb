import Head from "next/head";
import Image from "next/image"
import Container from "@/components/container";
import Intro from "@/components/intro";
import React from 'react'

const About = () => {
  return(
  <>
        <Container>
          <Intro />
          <h1 className="text-8xl flex items-center justify-center">about</h1>
          <div className="flex items-center justify-center">
          <Image className="mb-8 md:mb-16" src="/blobanimation-1.svg" width={200} height={200}/>
          <Image className="mb-8 md:mb-16" src="/blobanimation-2.svg" width={200} height={200}/>
          <Image className="mb-8 md:mb-16" src="/blobanimation-black.svg" width={200} height={200}/>
          <Image className="mb-8 md:mb-16" src="/blobanimation-4.svg" width={200} height={200}/>
          <Image className="mb-8 md:mb-16" src="/blobanimation-5.svg" width={200} height={200}/>
          </div>
          <h1 className="flex items-center justify-center">a blog for racial dialogue.</h1>
        </Container>
  </>
  )
}

export default About;