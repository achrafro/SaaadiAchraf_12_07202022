import React from 'react'

function Welcome(props) {
 
      /**
 * nom d'utilisateur
 * @param {string} userName nom d'utilisateur
 * @returns {string} 
  */
 let userName = props.name;

  return (
    <div className='welcome_component'>
<h1>Bonjour <div className='User_name'> {userName} </div> </h1>
<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

    </div>
  )
}

export default Welcome