import { Search } from '@mui/icons-material'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import TextField from '@mui/material/TextField'

const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '25px',
    boxShadow: 1
  },
}));

type Props = {
    searchQuery: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

function SearchBar({searchQuery, handleChange, onClick}: Props) {

  return (
    <Box sx={{ flexGrow: 1}}>
      <SearchBox
        id="searchbar"
        value={searchQuery}
        onChange={handleChange}
        variant="outlined"
      />
      <IconButton aria-label="search" onClick={onClick}>
        <Search></Search>
      </IconButton>
    </Box>
  )
}

export default SearchBar