import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ListingCard from '@components/Listing/Listing'
import NavBar from '@components/NavBar/NavBar'
import Typography from '@mui/material/Typography'

import { Page, ApiResponse, Post } from 'types/types'

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

const Home: NextPage = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({})

  console.log(apiResponse)

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({ 
        appId: '3201391683461364',
        autoLogAppEvents : true,
        status: true,
        version: 'v14.0'
      });

      // authenticate fb function

      FB.api(
        '/618676662914902/feed',
        'get',
        {
          access_token: 'EAAtfphYUYPQBAKcjAViu0hq1ZA5GDKzRnSI2x05H3zkeIdbYxTWxkCZCIZCq6zVVnONuBbWr6A0Kzw54PfTsQO8Kvyv1HRelcTjX1hZClOlpYsdOr5jZCrYeTmSXpI0GM2SJZBfxIAlpkmsQr7ZCA64iep6ZAAYk5oekS7a93IJ3ygZDZD'        
        },
        function(response: ApiResponse) {
          if (!response || response.error) {
            console.log(response)
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
