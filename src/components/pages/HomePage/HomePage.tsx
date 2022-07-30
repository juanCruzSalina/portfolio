import React from 'react'
import { HomeHeading, HomeIcon, PageContent } from './HomePage.styles';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import UIStructure from '../../organisms/UIStructure/UIStructure';
import Heading from '../../atoms/Heading/Heading';

const HomePage: React.FC = () => {
  return (
    <UIStructure>
      <PageContent>
        <HomeIcon icon={faDragon}/>
        <HomeHeading>
          <Heading>
            Front-end Developer
          </Heading>
        </HomeHeading>
      </PageContent>
    </UIStructure>
  )
}

export default HomePage