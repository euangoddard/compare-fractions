import { Chart, registerables } from "chart.js";
import { FunctionalComponent, h } from "preact";
import { useEffect, useRef } from "preact/compat";
import type { Fraction } from "../../models/fraction";

Chart.register(...registerables);

interface FractionVizProps extends Fraction {
  color: string;
}

const size = 160;

const FractionViz: FunctionalComponent<FractionVizProps> = ({
  numerator,
  denominator,
  color,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart>(null);

  useEffect(() => {
    const getLabel = () => ` ${numerator}/${denominator}`;
    const data = [];
    const colors = [];
    for (let i = 0; i < denominator; i++) {
      data.push(1 / denominator);
      colors.push(i < numerator ? color : "#ccc");
    }

    if (chartRef.current) {
      const chart = chartRef.current;
      chart.data.datasets[0].data = data;
      chart.data.datasets[0].backgroundColor = colors;
      chart.options!.plugins!.tooltip!.callbacks!.label = getLabel;
      chart.update();
    } else {
      (chartRef as any).current = new Chart(canvasRef.current!, {
        type: "pie",
        data: {
          datasets: [
            {
              data,
              backgroundColor: colors,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: getLabel,
              },
            },
          },
        },
      });
    }
  });

  return (
    <figure style={{ margin: 0, width: `${size}px`, height: `${size}px` }}>
      <canvas ref={canvasRef} width={size} height={size}></canvas>
    </figure>
  );
};

export default FractionViz;
