import React from "react";
import { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
  Legend,LabelList
} from "recharts";

function Objectifss(props) {
  const data01 = [{ name: "Score", value: props.score }];

  return (
    <div className="progression">
      <ResponsiveContainer aspect={1}>
        <PieChart width={100} height={100}>
          <Pie
            data={data01}
            dataKey="value"
            innerRadius={73}
            outerRadius={85}
            startAngle={90}
            endAngle={props.score*100+160}
            fill="#FF0000	"
          > 
           
           <Label  value={props.score*100 +"%"}  fontSize='24px'    position="centerTop" className="pourcentage" />

              <Label  value="De votre  objectif"  width={100} 
                position="centerBottom"  className="text_bottom_pourcentage"/>
 
          
          </Pie>
 
          <Legend
            verticalAlign="top"
            height={36}
            payload={[{ value: "Score", id: "ID01", color: "BLACK" }]}
            iconSize={0}
            wrapperStyle={{ top: 5, left: 0 }}
          />


        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Objectifss;
