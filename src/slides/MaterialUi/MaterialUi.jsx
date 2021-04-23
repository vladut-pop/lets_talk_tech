import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select
} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const MaterialUi = () => {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div className='p-3' style={{minHeight:"100vh", backgroundColor: '#25c4ff2b'}}>
      <div className='mx-auto w-50 mb-5 pt-5'>
        <Grid container spacing={3} alignItems='center' justify='center'>
          <Grid item xs={12} sm>
            <img
              style={{ maxWidth: '175px', minWidth: '75px' }}
              src='https://material-ui.com/static/logo_raw.svg'
              alt='...'
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm
            style={{
              color: '#1976d2',
              fontFamily: 'Roboto',
              minWidth: '250px'
            }}
          >
            <h2 style={{ letterSpacing: '.7rem' }}>MATERIAL-UI</h2>
            <p>
              MaterialUI is a set of components built based on the material
              design guidelines of Google. The components are self-supporting
              and only inject the styles they need to display, which could lead
              to performance enhancements in your application.
            </p>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3} alignItems='stretch' justify='center'>
        <Grid item xs={12} sm={6}>
          <div className={classes.root}>
            <Button variant='contained'>Default</Button>
            <Button variant='contained' color='primary'>
              Primary
            </Button>
            <Button variant='contained' color='secondary'>
              Secondary
            </Button>
            <Button variant='contained' disabled>
              Disabled
            </Button>
            <Button
              variant='contained'
              color='primary'
              href='#contained-buttons'
            >
              Link
            </Button>
          </div>
          <div className='py-5'>
            <CircularProgress />
            <CircularProgress color='secondary' />
            <LinearProgress className='m-2 p-1' />
            <LinearProgress color='secondary' className='m-2 p-1' />
          </div>
          <div className='py-5'>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-helper-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-helper-label'
                  id='demo-simple-select-helper'
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel
                  shrink
                  id='demo-simple-select-placeholder-label-label'
                >
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-placeholder-label-label'
                  id='demo-simple-select-placeholder-label'
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Label + placeholder</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} disabled>
                <InputLabel id='demo-simple-select-disabled-label'>
                  Name
                </InputLabel>
                <Select
                  labelId='demo-simple-select-disabled-label'
                  id='demo-simple-select-disabled'
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Disabled</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} error>
                <InputLabel id='demo-simple-select-error-label'>
                  Name
                </InputLabel>
                <Select
                  labelId='demo-simple-select-error-label'
                  id='demo-simple-select-error'
                  value={age}
                  onChange={handleChange}
                  renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Error</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-readonly-label'>
                  Name
                </InputLabel>
                <Select
                  labelId='demo-simple-select-readonly-label'
                  id='demo-simple-select-readonly'
                  value={age}
                  onChange={handleChange}
                  inputProps={{ readOnly: true }}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Read only</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-autowidth-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-autowidth-label'
                  id='demo-simple-select-autowidth'
                  value={age}
                  onChange={handleChange}
                  autoWidth
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Auto width</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value='' disabled>
                    Placeholder
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Placeholder</FormHelperText>
              </FormControl>
              <FormControl required className={classes.formControl}>
                <InputLabel id='demo-simple-select-required-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-required-label'
                  id='demo-simple-select-required'
                  value={age}
                  onChange={handleChange}
                  className={classes.selectEmpty}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  value={age}
                  onChange={handleChange}
                  label='Age'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='filled' className={classes.formControl}>
                <InputLabel id='demo-simple-select-filled-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-filled-label'
                  id='demo-simple-select-filled'
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <iframe
            src='https://material-ui.com/'
            title='material_ui'
            className='w-100'
            style={{ height: '600px' }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default MaterialUi
