import React from 'react'

import Button from '../components/buttons/button'
import NavigationButton from '../components/buttons/navigation-button'
import Navigation from '../components/nav/navigation'
import Explore from '../components/icons/menu/Explore'
import TextTitle from '../components/text/text-title'
import ThemeButton from '../components/buttons/theme-button'
import Stack from '../components/stack/stack'

//Main Header Text
export default {
  title: 'Buttons',
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}
//Headers Inside
export const Normal = () => <Button children={'Normal'} />
export const Theme = () => (
  <Stack column gap={15}>
    <ThemeButton children={'Twitter'} />
    <ThemeButton full children={'Twitter Full'} />
    <ThemeButton big children={'Twitter Big'} />
  </Stack>
)

export const NavButton = () => (
  <NavigationButton>
    <Explore />
    <TextTitle>Explore</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
