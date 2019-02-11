import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  ajax: service(),
  setupController(controller, model) {
    controller.set('isLoading', true);
    this.ajax.request('/report').then((data) => {
      controller.set('reportData', data);
      console.log(data);

      let weekData = data.weeksChart;
      let cumalativeData = data.cumalativeChart;

      controller.set('SemesterPurchaseData', {
        labels: weekData.label,
        datasets: [{
          label: "Cost",
          borderColor: '#e62a76',
          fill: false,
          data: weekData.cost,
        }]
      });
      controller.set('CumalativePurchaseData', {
        labels: cumalativeData.label,
        datasets: [{
          label: "Cost",
          borderColor: '#e62a76',
          fill: false,
          data: cumalativeData.cost,
        }]
      });

      controller.set('CumalativePurchaseOption', {
        responsive: true,
        aspectRatio: 1.5,
        tooltips: {
          mode: 'index',
          intersect: true
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: data.budget,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 3,
            label: {
              enabled: true,
              content: `Total Budget - $${data.budget}`
            }
          }]
        },
        title: {
          text: 'Cumalative Cost',
          display: true,
          fontSize: 16
        },
        legend: {
          position: 'bottom'
        }
      });

      controller.set('isLoading', false);

    });

    controller.set('SemesterPurchaseOption', {
      aspectRatio: 1.5,
      title: {
        text: 'Weekly Purchases',
        display: true,
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    });

  }
});
