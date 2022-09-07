import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import { PolarAngleAxis,RadialBarChart, RadialBar, Legend, ResponsiveContainer , PieChart,Pie} from 'recharts';
const data = [
  { name: 'L1', value: 25 }
];


 

const Objectifs = (props) => {
  //  var data = [55,88]
//  var r = 300;
//  var color = d3.scaleOrdinal()
//  .range (["red","white"])
//  const canvas = d3.select("p")
//  .append("svg")
//  .attr("width",316)
//  .attr("height",333)
 
// var group = canvas.append("g")
// .attr("transform","translate(300,300)" ) ;

//  var arc = d3.arc()
//  .innerRadius(200) 
//  .outerRadius(r)
  
//  var pie= d3.pie()
//  .value(function (d) {return d; });

//  var arcs = group.selectAll(".arc")
//  .data(pie(data))
//  .enter()
//  .append("g")
//  .attr("class","arcs");

//  arcs.append("path")
//  .attr("d",arc)
// //  .attr("fill",function (d) {return color(d.data)}) ;
// var svg = d3.select("svg")
//             .append("g")
//             .attr("transform", "translate(150,150)");
 
//         // An arc will be created
//         var arc = d3.arc()
//             .innerRadius(60)
//             .outerRadius(45)
//             .startAngle(4)  
//             .endAngle(6.3)
  
//         svg.append("path")
//             .attr("class", "arc")
//             .attr("d", arc)
//             .attr("fill","red");

    return (
      <div className='progression' > 
  {/* <svg width="300" height="300">
  <text x="50" y="100" fill="black" fontSize={24}> Score </text>

<text x="150" y="140" fill="black" fontSize={24}>  {props.score *100}  % </text>
<text x="150" y="160" fill="black" fontSize={18}>  de votre objectif</text>

</svg> */}

<ResponsiveContainer     fill="#FF0101"       >




<RadialBarChart
  width={150}
  height={250}
  innerRadius={65}
  outerRadius={48}
  barSize={16}
  data={data}
  startAngle={-270}
  endAngle={90}
  >
  <PolarAngleAxis
  type="number"
  domain={[0, 100]}
  angleAxisId={0}
  tick={false}
  />
  <RadialBar
  
  dataKey="value"
  cornerRadius={150 / 2}
  fill="red"
  />
  <text
  x={100 / 2}
  y={20 / 2}
  textAnchor="middle"
  dominantBaseline="middle"
  className="progress-label"
  >
  Score
  </text>

  <text
  x={250 / 2}
  y={150 / 2}
  textAnchor="middle"
  dominantBaseline="middle"
  className="progress-label"
  >
  {props.score*100} %
de votre
objectif
  </text>

</RadialBarChart>



 


      </ResponsiveContainer>



      </div>
        )
}

export default Objectifs;