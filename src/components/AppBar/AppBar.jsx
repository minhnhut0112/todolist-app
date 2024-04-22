import Box from '@mui/material/Box'
import { ReactComponent as LogoApp } from '@/assets/trello.svg'
import { SvgIcon, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import WorkSpaces from './Menu/WorkSpaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Button from '@mui/material/Button'
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined'
import TextField from '@mui/material/TextField'

import Profile from './Menu/Profile'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notification from './Notifications'

const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')

  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.todolist.appBarHeight,
        paddingX: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#fff')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={LogoApp}
            fontSize='small'
            inheritViewBox
            sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') }}
          />
          <Typography
            onClick={() => navigate('/')}
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D'),
              cursor: 'pointer'
            }}
          >
            TaskCraft
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <WorkSpaces />
          <Recent />
          <Starred />
          <Button
            sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') }}
            startIcon={<LibraryAddOutlinedIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          placeholder='Search...'
          type='search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') }} />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: 120,
            maxWidth: 180,
            mt: 0.5,
            '& label': {
              color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D')
            },
            '& input': {
              color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D')
            },
            '& label.Mui-focused': {
              color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D')
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') },
              '&:hover fieldset': { borderColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') },
              '&.Mui-focused fieldset': { borderColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#172B4D') }
            }
          }}
        />

        <Notification />

        <Box>
          <Profile />
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
