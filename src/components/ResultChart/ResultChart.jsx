import { LineChart, Line} from "recharts";

const ResultData = [
  {
    "id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Bob",
    "physics": 74,
    "chemistry": 81,
    "math": 69
  },
  {
    "id": 3,
    "name": "Charlie",
    "physics": 90,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "David",
    "physics": 67,
    "chemistry": 72,
    "math": 76
  },
  {
    "id": 5,
    "name": "Emma",
    "physics": 93,
    "chemistry": 89,
    "math": 91
  },
  {
    "id": 6,
    "name": "Frank",
    "physics": 80,
    "chemistry": 75,
    "math": 84
  },
  {
    "id": 7,
    "name": "Grace",
    "physics": 77,
    "chemistry": 83,
    "math": 79
  },
  {
    "id": 8,
    "name": "Henry",
    "physics": 69,
    "chemistry": 71,
    "math": 73
  },
  {
    "id": 9,
    "name": "Isabella",
    "physics": 88,
    "chemistry": 92,
    "math": 86
  },
  {
    "id": 10,
    "name": "Jack",
    "physics": 82,
    "chemistry": 79,
    "math": 87
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={600} data = {ResultData}>
                <Line dataKey='math' ></Line>
                <Line dataKey="physics" stroke="yellow" ></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;