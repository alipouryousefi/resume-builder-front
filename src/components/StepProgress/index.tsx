import React from 'react'

const StepProgress = ({ progress }: { progress: number }) => {
  return (
<div className='w-full h-1 bg-purple-50 rounded-[2px] overflow-hidden'>
    <div className='h-full bg-linear-to-r from-purple-500/5 to-purple-700 transition-all rounded-[2px]' style={{ width: `${progress}%` }}></div>
</div>
  )
}

export default StepProgress
