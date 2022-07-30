import { Search } from '@mui/icons-material'
import { styled } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
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
    <Paper sx={{ 
      display: 'flex',
      borderRadius: '25px',
      boxShadow: 1,
      alignItems: 'center',
      flexGrow: 1,
      p: '2px 4px'
      }}
      component="form">
        <InputBase 
        id="searchbar"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search listings"
        inputProps={{
          'aria-label': "search listings"
        }}
        sx={{
          ml: 2,
          flex: 1
        }}
        />
      <IconButton aria-label="search" onClick={onClick}>
        <Search></Search>
      </IconButton>
    </Paper>
  )
}

export default SearchBar