import React from 'react'
import PropTypes from 'prop-types'
import { Scatter } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'



const ScatterPlot = ({
    xs = [],
    ys = [],
    label = 'Dataset',
    backgroundColor = ['rgba(255, 99, 132, 1)']
} = {}) => {
    const datasets = xs.map((x, i) => ({
        x: x,
        y: ys[i]
    }))

    return (
        <Scatter
            data={{
                datasets: [
                    {
                        label: label,
                        data: datasets,
                        backgroundColor: backgroundColor,
                        pointHoverRadius: 9
                    }
                ]
            }}

            options={{
                scales: {
                    y: {
                        beginAtZero: true
                    },

                }
            }}
        />
    )
}

ScatterPlot.propTypes = {}

export default ScatterPlot