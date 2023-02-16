import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { environment } from '../../_enviroment/environment.js'
import { format } from 'date-fns'
import './Cursada.scss'

function Cursada({ cursada }) {
  const navigate = useNavigate()

  
  const getCursadaDetails = (cursada) => {
    navigate(`/cursadas/id/${cursada._id}`)
  }

  const getYear = (date) => format(Date.parse(date), 'yyyy')

  return (
    <div className="">
      <div
        className="card  text-start movie-card "
        style={{ width: '13rem' }}
        onClick={() => getCursadaDetails(cursada)}
      >
       <div className="z-2 position-absolute p-5 rounded-3 " > <h1 className='font-size-30'>👑</h1>     </div>
        {cursada.video}
          <div className="vote-average vote-average--movie">
            {""}
          </div>
        <div className="card-body">
        
          <div className="card-title mb-2 mt-2 fs-6 fw-bold text-center"onClick={() => getCursadaDetails(cursada)} >{cursada.title}</div>
          <div className="release-date">{""}</div>
        </div>
      </div>
    </div>
  )
}

Cursada.propTypes = {
  cursada: PropTypes.object.isRequired,
}

export default Cursada