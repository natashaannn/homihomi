import { Page, ApiResponse } from 'types/types'
import Box from '@mui/material/Box'
import ListingCard from '@components/Listing/Listing'
import NavBar from '@components/NavBar/NavBar'
import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

const pages: Page[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
]

type Props = {
  response: ApiResponse;
}

const Home: NextPage = () => {
  const [response, setResponse] = useState(undefined)

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({ 
        appId: '449280767063215',
        autoLogAppEvents : true,
        xfbml            : true,
        version: 'v14.0'
      });

      FB.api(
        '/618676662914902/feed',
        'get',
        {},
        function(response: ApiResponse) {
          if (response.data) {
            setResponse(response)
            console.log(response)
          } else {
            console.log(response)
          }
        }
        );
    }
  }, [])

  return (
    <Box>
      <NavBar appName="Homihomi" pages={pages}></NavBar>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        wrap="wrap"
        sx={{
          p: "20px"
        }}
      >
      {response ? response.data.map( (listing) => (
        <Grid item xs={6} md={4} lg={2} key={listing.id}>
          <ListingCard listing={listing} />
        </Grid>
      )) :
      <Typography>Loading</Typography>}
        
      </Grid>
    </Box>
  )
}

// export async function getStaticProps() {
//   const accessToken = 'EAAGYnlSGdK8BANPsPDmmZAXZAhSEyODsWSFE25Pz7zpY7WjPPO5KC18IDUAIZBpDDQEXSluAZCZAAXCqMkaAIhu25yp2jSFfZBIFL1ZBwScXVeoYZAGPOfV0YFTs0DjxgJrNdmxApNvOOhF105hNaWqkxd01v9gDPZCZCeaSZAt1mBedmpxxkW7zi7oWXPYVXD3qUQkc31RJuAeieD6ZBZCvUvQx1CyyZB80Gc6DsohI2GdB1KFwTHLFXiyhlh'
//   const res = await fetch( "https://graph.facebook.com/v14.0/618676662914902/feed?access_token=" + accessToken)
//   const response = await res.json()
//   return { props: { response }}  
// }

export default Home
