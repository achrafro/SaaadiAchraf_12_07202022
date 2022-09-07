import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 
function SessionEvolution(props) {
    /**
 * getting Data from API
 * @param {object} datas get user avg sessions
 * @returns {object} 
  */
   let datas = [{}];
  if (props.evolutionInfo.length == 0 ) return <> .... loading </>
  else {
  props.evolutionInfo.map((session)=> {
    datas.push(session);
  })
  datas.splice(0, 1);
  datas[0].day = "L"
  datas[1].day = "M"
  datas[2].day = "M"
  datas[3].day = "J"
  datas[4].day = "V"
  datas[5].day = "S"
  datas[6].day = "D"

 }

    function Customtool_Session({ active, payload, label }) {
        if (active) {
          return (
            <div className="tooltip_session">
               <h4>{payload[0].value} min </h4>
            </div>
          );
        }
        return null;
      }
    
  return (
    <div className='Session__Evolution'>
 <ResponsiveContainer      >

<LineChart  
           data={datas}
       
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  stroke="red" fill="red"
 
  >
  <CartesianGrid strokeDasharray="0 5" fill="red" />
  <XAxis dataKey="day"  
  axisLine={false}
 tickLine={false} 
 padding={{ left: 0, right: 0 }}
 tick={{stroke: 'white', strokeWidth:1}}
 tickMargin={-2}
 opacity={0.5}
  />
  <YAxis  
 
 hide={true}
             />

<Legend verticalAlign="top" height={36} 
wrapperStyle={{top: 1 , width: 300 ,left:0}}
 payload={[{ value: 'Durée moyenne des sessions', type: 'line', id: ' ' }]}

  />

  <Tooltip  content={Customtool_Session} />
   <Line type="monotone" 
   dataKey="sessionLength" stroke="white" 
   strokeWidth={2} 
   dot={false}
   opacity={0.8}
 
 
   />
 </LineChart>
 </ResponsiveContainer>

    </div>
  )
}

export default SessionEvolution