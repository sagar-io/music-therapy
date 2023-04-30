import {LandingNavBar} from '../NavBar'
import {Description} from './Description'
import {Main} from './Main'
import { History } from './History'
import { ProgressBar } from '../ProgressBar'
import {CuredDiseaseMin} from './CuredDiseaseMin'


export const Landing = () => {
  return (
    <div>
        <ProgressBar />
        <LandingNavBar />
        <Main />
        <Description/>
        <History />
        <CuredDiseaseMin/>

    </div>
  )
}

