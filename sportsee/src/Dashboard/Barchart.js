import React, { useEffect, useState } from "react";
import {
  LabelList,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import pointRouge from "../styles/img/point_rouge.png";
import pointNoir from "../styles/img/point_noir.png";


const Barchart = (props) => {
      /**
 *  data d'utilisateur
 * @param {string} userdata data d'utilisateur
 * @returns {object} 
  */

   let userdata = [{}];
 
 
  if (props.info.length == 0) return <> Loaaading... </>
  else {
    props.info.map ((session) => {
      userdata.push(session);
        
    })
    userdata.splice(0, 1);
   }

  // toooll tipppp

  function Customtool({ active, payload, label }) {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{payload[1].value} Kg </h4>
          <h4>{payload[0].value} Kcal </h4>
        </div>
      );
    }
    return null;
  }
  return (
    <div className="barchart_Container">
      <div className="label_chart_parent">
        <p className="label_barchart"> Activité quotidienne</p>
        <div className="label_details"> 
        <p>
          <img src={pointRouge} />
          Poids (kg)
        </p>
        <p>
        
          <img src={pointNoir} />
          Calories brûlées (kCal)
        </p>
        </div>
      </div>
      <ResponsiveContainer aspect={3}  dataKey>
        <BarChart
          width={500}
          height={300}
          data={userdata}
          margin={{
            top: 5,
            right: 3,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2" opacity={0.5} />
          <XAxis   opacity={0.5}   tickFormatter={(number) => number + 1} />

          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
          />
 
        


          <Tooltip content={Customtool} />
          {/* <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />

          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          /> */}

<Bar dataKey="calories"   fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="kilogram"   fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
       
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
