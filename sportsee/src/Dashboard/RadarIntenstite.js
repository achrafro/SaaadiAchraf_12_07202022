import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const RadarIntenstite = (props) => {

  /**
 * getting Data from API
 * @param {object} datas get user avg sessions
 * @returns {object} 
  */
  let datas = [{}];


if (props.UserPerformInfo.length == 0 ) return <>  Loaading ..</>
else  {
   props.UserPerformInfo.data.map((stats) => {
    datas.push(stats)


  })
  datas.splice(0, 1);

datas.map((item,index)=> {

item.kind = props.UserPerformInfo.kind[index+1]

})

}
  
     
    return (
        <div className='Radar__Chart'>
             <ResponsiveContainer    fill="#FF0101"       >
        <RadarChart   cx="48%" cy="50%"    outerRadius="60%" data={datas} >
          <PolarGrid    />
          <PolarAngleAxis  tickLine={false}  tick={{fontSize: 11}} dataKey="kind" stroke="#ffffff"  />
           <Radar  name="Mike" dataKey="value"   fill="#FF0101" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default RadarIntenstite;