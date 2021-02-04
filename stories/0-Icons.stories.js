import React from 'react'

import * as commonIcons from '../components/icons/common'
import * as editorIcons from '../components/icons/editor'
import * as menuIcons from '../components/icons/menu'
import * as tweetIcons from '../components/icons/tweet'

export default {
  title: 'Icons'
}

export const Common = () => (
  <div className="icons">
    {Object.keys(commonIcons).map(function (c) {
      let CommonIcon = commonIcons[c]
      return <CommonIcon key={c} />
    })}
  </div>
)

export const Editor = () => (
  <div className="icons">
    {Object.keys(editorIcons).map(function (c) {
      let EditorIcon = editorIcons[c]
      return <EditorIcon key={c} />
    })}
  </div>
)

export const Menu = () => (
  <div className="icons">
    {Object.keys(menuIcons).map(function (c) {
      let MenuIcons = menuIcons[c]
      return <MenuIcons key={c} />
    })}
  </div>
)

export const Tweet = () => (
  <div className="icons">
    {Object.keys(tweetIcons).map(function (c) {
      let TweetIcons = tweetIcons[c]
      return <TweetIcons key={c} />
    })}
  </div>
)
