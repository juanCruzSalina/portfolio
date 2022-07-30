import { Variants } from 'framer-motion'
import React from 'react'
import { PageWrapper } from './PageContainer.styles'

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = (props) => {

  const pageVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .2
      }
    }
  }

  return (
    <PageWrapper
      initial={'hidden'}
      animate={'visible'}
      variants={pageVariants}
    >
      {props.children}
    </PageWrapper>
  )
}

export default PageContainer