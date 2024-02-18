import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  return (
    <div className='mt-14 mx-auto max-w-6xl grid lg:grid-cols-[40%_60%]'>
      <LeftSection />
      <RightSection />
    </div>
  )

}

export default App
