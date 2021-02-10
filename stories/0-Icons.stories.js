import React from 'react'

import * as commonIcons from '../components/icons/common'
import * as editorIcons from '../components/icons/editor'
import * as menuIcons from '../components/icons/menu'
import * as tweetIcons from '../components/icons/tweet'
import Photo from '../components/photo/photo'
import ProfileBox from '../components/profile-box/profile-box'
import Stack from '../components/stack/stack'

export default {
  title: 'Icons'
}

export const Profiles = () => (
  <Stack column gap={40}>
    <Photo alt="Profile Image" />
    <ProfileBox />
  </Stack>
)

export const Common = () => (
  <div className="icons">
    {Object.keys(commonIcons).map(function (c) {
      let CommonIcon = commonIcons[c]
      return (
        <Stack column>
          <CommonIcon key={c} />
          <span>{c}</span>
        </Stack>
      )
    })}
  </div>
)

export const Editor = () => (
  <div className="icons">
    {Object.keys(editorIcons).map(function (c) {
      let EditorIcon = editorIcons[c]
      return (
        <Stack column>
          <EditorIcon key={c} />
          <span>{c}</span>
        </Stack>
      )
    })}
  </div>
)

export const Menu = () => (
  <div className="icons">
    {Object.keys(menuIcons).map(function (c) {
      let MenuIcon = menuIcons[c]
      return (
        <Stack column>
          <MenuIcon key={c} />
          <span>{c}</span>
        </Stack>
      )
    })}
  </div>
)

export const Tweet = () => (
  <div className="icons">
    {Object.keys(tweetIcons).map(function (c) {
      let TweetIcon = tweetIcons[c]
      return (
        <Stack column>
          <TweetIcon key={c} />
          <span>{c}</span>
        </Stack>
      )
    })}
  </div>
)
