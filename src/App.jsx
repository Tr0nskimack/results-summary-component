import React from 'react'
import { PiLightningLight } from "react-icons/pi";
import { PiBrainThin } from "react-icons/pi";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { LuEye } from "react-icons/lu";

const App = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      {/* card */}
      <div className='flex '>
        {/* left */}
        <div className='bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] w-[300px] h-[400px] rounded-3xl text-center pt-7 px-12 z-50'>
          {/* content */}
          <div className='flex flex-col justify-center items-center'>
            <div>
              <h1 className='text-lg font-bold text-[#A2AECD]'>Your Result</h1>

            </div>
            {/* circle */}

            <div className=' mt-5 bg-gradient-to-b from-[#4D20C9] to-transparent rounded-full w-[160px] h-[160px] flex flex-col justify-center items-center'>
              <h1 className='font-bold text-5xl text-white'>76</h1>
              <p className='text-[#A2AECD] font-semibold text-xs'>of 100</p>

            </div>
            <div>
              <h1 className='text-2xl font-bold mt-4 text-white'>Great</h1>
              <p className='font-semibold mt-4 text-sm text-[#A2AECD]'> You scored higher than 65% of the people who have taken these tests.</p>
            </div>


          </div>
        </div>
      </div>
      {/* right */}
      <div className='w-[300px] h-[400px] rounded-r-3xl pt-7 px-12 shadow-xl  -ml-5 z-40'>
        <div>
          <h1 className='font-bold'>Summary</h1>

          <div>
            <div className='flex justify-between items-center mt-6 bg-[#fef7f7] py-2 px-2 rounded-md w-[230px]'>
              <div className='flex gap-1 items-center'>
                <PiLightningLight color='#FF5757' />
                <h1 className='text-[#FF5757]  font-bold text-sm' >Reaction</h1>
              </div>
              <div className='text-xs font-bold'>
                80
                <span className='font-bold text-[#A2AECD] pr-1'> / 100</span>
              </div>
            </div>
            <div className='flex justify-between items-center mt-6 bg-[#fffaf2] py-2 px-2 rounded-md w-[230px]'>
              <div className='flex gap-1 items-center'>
                <PiBrainThin color='#FFB01F' />
                <h1 className='text-[#FFB01F] font-bold text-sm' >Memory</h1>
              </div>
              <div className='text-xs font-bold'>
                92
                <span className='font-bold text-[#A2AECD] pr-1'> / 100</span>
              </div>
            </div>
            <div className='flex justify-between items-center mt-6 bg-[#f6fffd] py-2 px-2 rounded-md w-[230px]'>
              <div className='flex gap-1 items-center'>
                <BiMessageRoundedMinus color='#00BD91' />
                <h1 className='text-[#00BD91] text-sm font-bold'>Verbal</h1>
              </div>
              <div className='text-xs font-bold'>
                61
                <span className='font-bold text-[#A2AECD] pr-1'> / 100</span>
              </div>
            </div>
            <div className='flex justify-between items-center mt-6 bg-[#f6f4fd] py-2 px-2 rounded-md w-[230px]'>
              <div className='flex gap-1 items-center'>
                <LuEye color='#7857FF' />
                <h1 className='text-[#7857FF] font-bold text-sm' >Visual</h1>
              </div>
              <div>

              <div className='text-xs font-bold'>
                72
                <span className='font-bold text-[#A2AECD] pr-1'> / 100</span>
              </div>
              </div>
            </div>
            <button className='mt-8 bg-[#303B5A] hover:bg-[#505e81] text-white text-sm rounded-full py-3 px-2  w-[230px] transition-all'>
              Continue
              
              
            </button>






          </div>

        </div>

      </div>

    </div>
  )
}

export default App