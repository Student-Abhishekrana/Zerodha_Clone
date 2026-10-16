import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import api from "../api";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function WatchListChart() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    api
      .get("/watchList/allWatchList")
      .then((res) => {
        console.log(res.data);
        setWatchList(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const data = {
    labels: watchList.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: watchList.map((stock) => stock.price),
        backgroundColor: watchList.map(
          (_, index) =>
            `hsla(${(index * 360) / watchList.length}, 70%, 60%, 0.7)`,
        ),
        borderColor: watchList.map(
          (_, index) => `hsl(${(index * 360) / watchList.length}, 70%, 50%)`,
        ),
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={data} />;
}
