import React from 'react'
import PropTypes from 'prop-types'
import { Line, Scatter } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'



const LinePlot = ({
    xs = [],
    ys = [],
    label = 'Dataset',
    backgroundColor = ['rgba(255, 99, 132, 1)']
} = {}) => {

    return (
        <Line
            data={{
                labels: ys,
                datasets: [
                    {
                        label: label,
                        data: xs,
                        borderColor: backgroundColor,
                        showLine: true,
                        pointRadius: 0,
                    }
                ]
            }}

            options={{
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}
        />
    )
}

LinePlot.propTypes = {}

export default LinePlot