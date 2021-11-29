import {Container, Box , Heading, Image,Link, Button, ListItem, List } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container >
            <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
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

        </Container>
    )
}

export default Page