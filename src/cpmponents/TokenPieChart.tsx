'use client'
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const data02 = [
  { name: "团队和早期投资者", value: 20 },
  { name: "社区和用户奖励", value: 30 },
  { name: "合作伙伴和顾问", value: 20 },
  { name: "长期生态基金", value: 30 },
  { name: "其他", value: 10 },
];

export default function TokenPieChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold #82ca9d">Token Pie Chart</h1>
      </div>
      <div style={{ width: '100%', height: '400px' }}> {/* 确保这个容器有一个具体的高度 */}
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={140}
              fill="#82ca9d"
              label={(entry) => `${entry.name} (${entry.value}%)`}
            />
            <Legend align="right" verticalAlign="middle" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  ) : null;
}

