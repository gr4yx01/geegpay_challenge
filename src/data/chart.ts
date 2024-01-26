const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '',
      data: [5000, 10000, 4000, 20000, 6000, 30000, 7000, 10500, 25000, 3500, 30000, 26000],
      backgroundColor: 'rgba(52, 202, 165, 0.10)', // Use the 'Utils' object to access the 'transparentize' method
      hoverBackgroundColor: 'rgba(52, 202, 165, 0.5)',
      borderRadius: 100,
      border: 0
    },
  ],
}

const option = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      grid: {
        display: false,
      }
    }
  },
}

export {data, option}