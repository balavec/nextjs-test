import {useState} from 'react'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch';
// import Button from '../components/Button'
import useDarkMode from 'use-dark-mode'
import Button from '@material-ui/core/Button';

import NoSsr from '@material-ui/core/NoSsr';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  const {value, toggle} = useDarkMode()
  const handleChange = () => {
    setDark()
  }

  return (
    <div>

    </div>
  )
}
