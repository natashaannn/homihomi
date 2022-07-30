import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Listing } from 'types/types'

type Props = {
    listing: Listing
}

function ListingCard({ listing }: Props) {
  return (
    <Card>
        <CardContent>
            <Typography variant='h5'>
                { listing.message }
            </Typography>
            <Typography variant='body2'>
                Posted on <i>{ new Date(listing.updated_time).toString() }</i>
            </Typography>
        </CardContent>
    </Card>
  )
}

export default ListingCard