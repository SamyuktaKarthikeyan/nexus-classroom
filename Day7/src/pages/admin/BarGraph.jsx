import ReactApexChart from "react-apexcharts";

const BarGraph = ({ courses, users }) => {
  // Count the number of purchases for each author
  const authorPurchases = {};
  users.forEach((user) => {
    const course = courses.find((course) => course.id === user.course_id);
    if (course) {
      authorPurchases[course.author_name] =
        (authorPurchases[course.author_name] || 0) + 1;
    }
  });

  // Prepare data for ApexCharts
  const chartData = {
    options: {
      chart: {
        type: "bar",
      },
      xaxis: {
        categories: Object.keys(authorPurchases),
      },
    },
    series: [
      {
        name: "Number of Purchases",
        data: Object.values(authorPurchases),
      },
    ],
  };

  return (
    <div>
      <h3>Number of User Purchases by Author</h3>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarGraph;
