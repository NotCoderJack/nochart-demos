import React, { useEffect } from "react";
import { Line } from "@antv/g2plot";

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 }
];

export default function LineChart() {
  useEffect(() => {
    const linePlot = new Line(document.getElementById('canvas'), {
      data,
      xField: "year",
      yField: "value"
    });
    console.log('render')
    linePlot.render();
  }, []);

  return <div id="canvas"></div>;
}
