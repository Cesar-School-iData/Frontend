import React from 'react'
import ProblemReport from '../components/problemCount'
import QrCode from '../components/newProblem'

function problem() {
  return (
    <div>
      <div className=''>
        <ProblemReport />
        <QrCode />
      </div>
    </div>
  )
}

export default problem