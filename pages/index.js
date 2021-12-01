import {Container, Box , Heading, Image,Link, Button, ListItem, List, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {GridItem} from '../components/grid-item'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import styled from '@emotion/styled'

const Links = styled.a`
text-decoration: none;
`

const Page = () => {
    return (
        <Container >
            <Box borderRadius='lg' bg='red' p={3} mb={6} align='center' 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
            Hello, I&apos;m a frontend-developer based on Ukraine
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        PetrSasha
                    </Heading>
                    <p></p>
                </Box>
                <Box 
                    flexShrink={0}
                    mt={{base:4, md:0}}
                    ml={{md:6}} textAlign='center'
                >
                    <Image 
                        borderColor='whiteAlpha.800'
                        borderWidth={2}
                        borderStyle='solid'
                        maxWidth='100px'
                        display='inline-block'
                        borderRadius='full'
                        src='images/Sasha.jpg'
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as='h3'>
                    Work
                </Heading>
                <Paragraph>
                    I`m  just started as a frontend developer in my 1st company, so i will add here my trophy <br/>
                    another soon ... {" "}
                    <NextLink href="/works/insta">
                        <Link>Insta</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Nikolaev , Ukraine
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Finished master's degree at the national university , Faculty of Computer Science
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                   Started Work at Ukrainian company Delta Plot as a Front and Developer 
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant="section-title">
                    MY dream travel around the whole world 
                </Heading>
                <Paragraph> I want visit places : 
                    <List>
                        <ListItem>
                            1-England
                        </ListItem>
                        <ListItem>
                            2-Japan
                        </ListItem>
                        <ListItem>
                            3-Village hidden in the foliage
                        </ListItem> 
                    </List>
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    On The web
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/PetrSasha' target='_blank'  >
                            <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub}/>}>
                                @PetrSasha
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://discord.com/'>
                            <Button variant='ghost' colorScheme='blue' leftIcon={<Icon as={IoLogoDiscord}/>}>
                                @PetrSasha
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://instagram.com/'>
                            <Button variant='ghost' colorScheme='pink' leftIcon={<Icon as={IoLogoInstagram}/>}>
                                @PetrSasha
                            </Button>
                        </Link>
                    </ListItem>
                </List>

        
                <Box align='center' my={4}>
                    <NextLink href='/posts'>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                            Popular pots
                        </Button>
                    </NextLink>
                </Box>
            </Section>

        </Container>
    )
}

export default Page