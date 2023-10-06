const ctx = document.getElementById('bar-chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018','2019','2020','2021'],
    datasets: [{
      label: 'Interior Design Market Value',
      data: [76670,81845,87369,93277,98268,103257,109067,114904,121054],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});