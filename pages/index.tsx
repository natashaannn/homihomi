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
        appId: '449280767063215',
        autoLogAppEvents : true,
        status: true,
        version: 'v14.0'
      });

      FB.api(
        '/618676662914902/feed',
        'get',
        {

          // access_token : 'EAAGYnlSGdK8BAE1ndTC82Oo7UCqKZCZBaf5d27gXK0hGIYTfHSghQZAVVGGyyRZAZBrT8cRZApZCk88VvSdR6TE7ASUALKO6Tu8SOBQjqoCeMzRH28eLGZAazMINLnlttaPP7PY42ZAKJUmbIG0diCo9IlKcjFQD8WZCITg0BfIGnYIz7zCTkwaGmk'
          // access_token: '449280767063215|8db66b702059f9477fdf9ef96a49dda3'
          access_token: 'EAAGYnlSGdK8BAO9wXnZB6jbL5DkciC1x5cwlFkBk6k5KYxjJJapE7IUdJ9rHG8oDRqHZBfRhjPJvdeowFmDSbJiboUKG1Lig6Q5wl15TsiqPA7vVVZCAkZCSOJDAVKo4fnPYagniqvVGbEIsVasUoDe0Fspw3vAXcHRx4kTlayK11ogGjPZCNA7Y0gZA94qFgIAmIqxFGM2qmNHIQ9YcJNr1xqTE6TvReIdZAtKyyJXAqbSLtVhlkYN'
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
