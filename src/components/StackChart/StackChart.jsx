import Highchart from "../Highchart/Highchart"

function StackChart() {

  const title = 'Top Sectors'
  const discription = 'The assets are distributed between equity and cash & equivalents.'

  const chartConfig = {
    "chart": {
      "type": "bar",
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
      "categories": ["Energy & Health", "Finance & Infrastructure", "Utilities & Others"],
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
      itemDistance: 4,
      symbolRadius: 0,
      labelFormatter: function () {
        let yData = this.yData?.filter(o => o)?.[0];

        return `${this.name}  <strong>${yData}% </strong>`
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
        "name": "Pharmaceuticals",
        "data": [26.40, 0, 0],
        color: '#75FFFF',
        legendIndex: 2
      },

      {
        "name": "Oil & Gas",
        "data": [32.19, 0, 0],
        color: '#75D6FF',
        legendIndex: 0

      },

      {
        "name": "Construction",
        "data": [0, 12.03, 0],
        color: '#FF7BF2',
        legendIndex: 3
      },

      {
        "name": "Private Bank",
        "data": [0, 26.04, 0],
        color: '#AA75FF',
        legendIndex: 1,
      },

      {
        "name": "Other",
        "data": [0, 0, 12.03],
        color: '#FF8E5D',
        legendIndex: 5
      },
      {
        "name": "Power Generation",
        "data": [0, 0, 26.40],
        color: '#FFC46A',
        legendIndex: 4
      },
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

export default StackChart