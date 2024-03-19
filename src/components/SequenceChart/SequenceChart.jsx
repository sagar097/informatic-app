import Highchart from "../Highchart/Highchart"

function SequenceChart() {

  const title = 'Fund Distribution'
  const discription = 'A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund.'

  const chartConfig = {
    "chart": {
      "type": "bar",
      height: '115px',
      spacingLeft: 0
    },
    "title": {
      text: '',
      style: {
        display: 'none'
      },

    },

    exporting: {
      enabled: false
    },
    "xAxis": {
      "categories": ["Fund"],
      labels: {
        enabled: false
      },
    },

    "yAxis": {
      "min": 0,
      title: {
        text: ''
      },
      labels: {
        enabled: false
      },
    },
    "legend": {
      alignColumns: false,
      symbolRadius: 0,

      labelFormatter: function () {
        return `${this.name}  <strong>${this.yData[0]}% </strong>`
      },

    },
    "plotOptions": {
      series: {
        stacking: 'percent',
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
        dataLabels: {
          title: {
            text: 'Goals'
          },
          enabled: false
        }
      },
    },
    "series": [

      {
        "name": "Equity",
        "data": [32.19],
        color: '#75D6FF',
        legendIndex: 0
      },

      {
        "name": "Gold",
        "data": [26.04],
        color: '#AA75FF',
        legendIndex: 1

      },

      {
        "name": "Bonds",
        "data": [26.40],
        color: '#75FFFF',
        legendIndex: 2
      },

      {
        "name": "Govt. Securities",
        "data": [26.40],
        color: '#FFC46A',
        legendIndex: 3,
      }
    ]
  }

  return (
    <Highchart
      title={title}
      discription={discription}
      options={chartConfig}
    />
  )
}

export default SequenceChart