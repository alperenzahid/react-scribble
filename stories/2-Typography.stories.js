import React from 'react'
import TextTitle from '../components/text/text-title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle bold={false}>Hello</TextTitle>
    <TextTitle>World</TextTitle>
  </div>
)
