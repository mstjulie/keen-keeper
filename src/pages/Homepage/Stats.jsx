import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const Stats = () => {

    const data = [
  { name: 'Call', value: 400, fill: '#0088FE' },
  { name: 'Text', value: 300, fill: '#00C49F' },
  { name: 'Video', value: 300, fill: '#FFBB28' },
 
];

    return (
      <div className='flex flex-col justify-center items-center my-10 '>
        <h1 className='text-4xl font-bold mb-10'>Friendship Analytics</h1>
        
               <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip></Tooltip>
      <Legend></Legend>
    </PieChart>
    
       
      </div>
    );
};

export default Stats;