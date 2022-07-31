import { Page, ApiResponse, Post } from 'types/types'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ListingCard from '@components/Listing/Listing'
import NavBar from '@components/NavBar/NavBar'
import type { NextPage } from 'next'
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
  const [apiResponse, setApiResponse] = useState<ApiResponse>({})

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({ 
        appId: '449280767063215',
        autoLogAppEvents : true,
        status: true,
        version: 'v14.0'
      });

      FB.api(
        '/618676662914902/feed',
        'get',
        {
          access_token : 'EAAGYnlSGdK8BADTTeSiTckUaAm5a2QifF6pBsgpZAidSGke9wlbECyBZCLZAuotieNjDEZCMpx5RHkBRqWzb09XIHMZAMLGHgSW8ZC8ZAuZC38IXdFeVLruVjyWk3XFRRUPoSAkvGZCCLFcs8iMrxzZCsbTDU0zCEhHPPWE0BBenqtYwZDZD'
        },
        function(response: ApiResponse) {
          if (!response || response.error) {
            console.log(!response ? 'error occured' : response.error)
          } else {
            setApiResponse(response)
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
      {apiResponse.data ? apiResponse.data.map( (listing: Post) => (
        <Grid item xs={6} md={4} lg={2} key={listing.id}>
          <ListingCard listing={listing} />
        </Grid>
      )) :
      <Typography>Loading</Typography>}
        
      </Grid>
    </Box>
  )
}

export default Home
