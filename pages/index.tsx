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
  const [response, setResponse] = useState(
    {
      "data": [
        {
          "updated_time": "2022-07-30T11:33:43+0000",
          "message": "Check out my bedroom",
          "id": "618676662914902_618714416244460"
        },
        {
          "updated_time": "2022-07-30T11:26:42+0000",
          "message": "Test post",
          "id": "618676662914902_618711189578116"
        },
        {
          "updated_time": "2022-07-30T09:58:24+0000",
          "story": "Natasha Ann created the group Pet-friendly Rentals.",
          "id": "618676662914902_618676672914901"
        }
      ],
      "paging": {
        "previous": "https://graph.facebook.com/v14.0/618676662914902/feed?access_token=EAAGYnlSGdK8BAA0wjOBBdJGBGAC8Sl3tMW1SPthNbsjC9zrRZAkhBXir0VVCmGDP6HMOAVRmscuoIZC8cigFCTrK6I4oC6W7QesMMfypjGw2Occbd8nB8zGsPCyKMkxZBa5tGysoEQbW6NDHEYUTP6lvPLWojnrrXVtSeC268QnVvCHaoFIW2ESegDhL5sGZBf9P5BgXMxPHR66OGOqJwOX7BNtFdptXgUT45yatFulqkmaOzCSX&pretty=0&__previous=1&since=1659180823&until&__paging_token=enc_AdDzDkAb8sanYUJM2MQzt7zyZCeNmkp2nkBj3sG6GTC2G95ZBrfelL7ryUR7RX8ml7Adn3z3FwNZBJTUTeOuakY2wOgEZBAcAFej0RLcCEUzEc04DdHyMqOChrp7UWeUJUEK2DMSHqSh24ZCdcq1ELFoyBBee",
        "next": "https://graph.facebook.com/v14.0/618676662914902/feed?access_token=EAAGYnlSGdK8BAA0wjOBBdJGBGAC8Sl3tMW1SPthNbsjC9zrRZAkhBXir0VVCmGDP6HMOAVRmscuoIZC8cigFCTrK6I4oC6W7QesMMfypjGw2Occbd8nB8zGsPCyKMkxZBa5tGysoEQbW6NDHEYUTP6lvPLWojnrrXVtSeC268QnVvCHaoFIW2ESegDhL5sGZBf9P5BgXMxPHR66OGOqJwOX7BNtFdptXgUT45yatFulqkmaOzCSX&pretty=0&until=1659175104&since&__paging_token=enc_AdDFZCOfpTFOx8LvTfYmT67apR3iZC6TXnoNgS1taIL6lEylZCZBYx2HRlDItXJOxvzzAaUeOR7pqjGAKT3EmL1k5z8VUPRuoNlw8OsdPiHDP12kkdfolBviEqYECg9B91isWEjA0ICjADKw96ro498qXfm2&__previous"
      }
    }
  )

  // useEffect(() => {
  //   window.fbAsyncInit = function() {
  //     window.FB.init({ 
  //       appId: '449280767063215',
  //       autoLogAppEvents : true,
  //       xfbml            : true,
  //       version: 'v14.0'
  //     });

  //     FB.api(
  //       '/618676662914902/feed',
  //       'get',
  //       {},
  //       function(response: ApiResponse) {
  //         if (response.data) {
  //           setResponse(response)
  //           console.log(response)
  //         } else {
  //           console.log(response)
  //         }
  //       }
  //       );
  //   }
  // }, [])

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
