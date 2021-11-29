import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import {Title, WorkImage, Meta} from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title = 'Instagram'>
        <Container>
            <Title>
                Insta <Badge>2016-</Badge>
            </Title>
            <P>
                This is my clone of Instagram , first try of React & Next.js using Tailwind.css and FireBase data-storage 
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://github.com/PetrSasha/insta">
                    https://github.com/PetrSasha/insta <ExternalLinkIcon mx='2px'/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React/Next.js/Recoil/Tailwind.css</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work