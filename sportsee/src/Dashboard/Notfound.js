import React from 'react'
import Header from './Header'
import Siderbar from './Siderbar'

function Notfound() {
  return (
    <div className='not_found'>

<Header></Header>
<Siderbar></Siderbar>

<div className="error-center">

<h1 className="error-404">
  <span>404</span>
</h1>

<h2 className="title">Page non trouvée</h2>
<p className="message">
  La page que vous avez demandée n'existe pas.
  <br />
</p>

</div>


    </div>
  )
}

export default Notfound