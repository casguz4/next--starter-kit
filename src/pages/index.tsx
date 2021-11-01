import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container, Typography } from '@mui/material'

const DynamicLink = dynamic(() => import('../common/components/Link'), {
  loading: () => <p>...Link Coming Soon</p>,
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>ProtoTypes Next.ts | Home</title>
        <meta name="description" content="uwm prototype next.ts app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <DynamicLink href="/about" color="primary">
            About Page :)
          </DynamicLink>
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
