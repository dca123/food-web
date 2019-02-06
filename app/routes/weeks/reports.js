import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    controller.set('CHARTDATA', {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: '#e62a76',
        borderColor: '#e62a76',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    })
    controller.set('CHARTOPTIONS', {
      aspectRatio: 1.5,
      title: {
        text: 'Cumalative Budget',
        display: true,
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    })
  }
});
