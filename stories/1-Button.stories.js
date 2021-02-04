import React from 'react'

import Button from '../components/buttons/button'
import NavigationButton from '../components/buttons/navigation-button'
import Navigation from '../components/navigation'
import Explore from '../components/icons/menu/Explore'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons',
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

//const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const Normal = () => <Button children={'Normal'} />
export const NavButton = () => (
  <NavigationButton>
    <Explore />
    <TitleBold>Explore</TitleBold>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
