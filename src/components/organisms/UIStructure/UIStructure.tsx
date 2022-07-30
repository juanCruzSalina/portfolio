import React from 'react'
import PageContainer from '../../atoms/PageContainer/PageContainer'
import Navbar from '../../molecules/Navbar/Navbar'

interface UIProps {
  children: React.ReactNode
}

const UIStructure: React.FC<UIProps> = (props) => {
  return (
    <PageContainer>
      <Navbar />
      {props.children}
    </PageContainer>
  )
}

export default UIStructure