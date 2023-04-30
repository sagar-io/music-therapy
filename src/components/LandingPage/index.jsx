import {LandingNavBar} from '../NavBar'
import {Description} from './Description'
import {Main} from './Main'
import { History } from './History'
import { ProgressBar } from '../ProgressBar'
import {CuredDiseaseMin} from './CuredDiseaseMin'
import {Footer} from '../Footer/'


export const Landing = () => {
  return (
    <div className='font-comfotaa overflow-x-hidden'>
        <ProgressBar />
        <LandingNavBar />
        <Main />
        <Description/>
        <History />
        <CuredDiseaseMin/>
        <Footer/>
    </div>
  )
}

