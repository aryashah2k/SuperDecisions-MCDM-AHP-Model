// Wait for document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Criteria Hierarchy Chart
    initializeChart('criteriaChart', createCriteriaChart);
    
    // Results Chart
    initializeChart('resultsChart', createResultsChart);
    
    // Criteria Contribution Chart - Allow more time for rendering
    setTimeout(() => {
        initializeChart('criteriaContributionChart', createContributionChart);
    }, 100);
    
    // Performance Comparison Chart - Allow more time for rendering
    setTimeout(() => {
        initializeChart('performanceComparisonChart', createPerformanceChart);
    }, 200);
    
    // Sensitivity Chart
    initializeChart('sensitivityChart', createSensitivityChart);
});

/**
 * Helper function to safely initialize a chart
 * @param {string} chartId - The ID of the canvas element
 * @param {Function} chartFunction - Function to create the chart
 */
function initializeChart(chartId, chartFunction) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        try {
            chartFunction(chartElement.getContext('2d'));
        } catch (error) {
            console.error(`Error initializing ${chartId}:`, error);
        }
    }
}

/**
 * Creates the criteria radar chart
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 */
function createCriteriaChart(ctx) {
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Performance', 'Cost', 'Display', 'Portability', 'Connectivity'],
            datasets: [{
                label: 'Criteria Weights',
                data: [40, 25, 15, 13, 7],
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 50
                }
            }
        }
    });
}

/**
 * Creates the results bar chart
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 */
function createResultsChart(ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Lenovo ThinkPad P16', 'ASUS ROG Zephyrus G14', 'MacBook Pro 16"', 'Surface Laptop Studio', 'Dell XPS 15', 'Acer Swift 3'],
            datasets: [{
                label: 'Normalized Scores',
                data: [0.2331, 0.1811, 0.1783, 0.1476, 0.1447, 0.1152],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(139, 92, 246, 0.5)',
                    'rgba(71, 85, 105, 0.7)',
                    'rgba(71, 85, 105, 0.7)',
                    'rgba(71, 85, 105, 0.7)'
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(71, 85, 105, 1)',
                    'rgba(71, 85, 105, 1)',
                    'rgba(71, 85, 105, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 0.25
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Final Rankings of Laptop Alternatives',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

/**
 * Creates the criteria contribution pie chart
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 */
function createContributionChart(ctx) {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Performance Capabilities', 'Cost Considerations', 'Display Quality', 'Portability Factors', 'Connectivity & Expandability'],
            datasets: [{
                data: [40, 25, 15, 13, 7],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.7)',
                    'rgba(234, 179, 8, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(236, 72, 153, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        font: {
                            size: 11
                        }
                    }
                }
            },
            animation: {
                duration: 500 // Shorter animation to reduce rendering issues
            }
        }
    });
}

/**
 * Creates the performance comparison radar chart
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 */
function createPerformanceChart(ctx) {
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['CPU', 'GPU', 'RAM', 'Storage', 'Display', 'Battery', 'Portability', 'Value'],
            datasets: [
                {
                    label: 'ThinkPad P16',
                    data: [9, 9, 10, 9, 8, 5, 4, 6],
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: 'rgba(37, 99, 235, 1)',
                    borderWidth: 2
                },
                {
                    label: 'ASUS ROG',
                    data: [7, 8, 6, 7, 7, 7, 7, 8],
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 2
                },
                {
                    label: 'MacBook Pro',
                    data: [8, 7, 8, 7, 9, 9, 6, 7],
                    backgroundColor: 'rgba(236, 72, 153, 0.2)',
                    borderColor: 'rgba(236, 72, 153, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    ticks: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 15,
                        font: {
                            size: 11
                        }
                    }
                }
            },
            animation: {
                duration: 500 // Shorter animation to reduce rendering issues
            }
        }
    });
}

/**
 * Creates the sensitivity analysis line chart
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 */
function createSensitivityChart(ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%'],
            datasets: [
                {
                    label: 'ThinkPad P16',
                    data: [0.15, 0.18, 0.21, 0.23, 0.25, 0.27, 0.29],
                    borderColor: 'rgba(37, 99, 235, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'ASUS ROG',
                    data: [0.17, 0.18, 0.18, 0.18, 0.17, 0.16, 0.15],
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'MacBook Pro',
                    data: [0.19, 0.19, 0.18, 0.18, 0.17, 0.16, 0.15],
                    borderColor: 'rgba(236, 72, 153, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Surface Studio',
                    data: [0.15, 0.15, 0.15, 0.15, 0.14, 0.14, 0.13],
                    borderColor: 'rgba(71, 85, 105, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Dell XPS 15',
                    data: [0.16, 0.15, 0.15, 0.14, 0.14, 0.14, 0.13],
                    borderColor: 'rgba(234, 179, 8, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Acer Swift 3',
                    data: [0.18, 0.16, 0.14, 0.12, 0.10, 0.09, 0.08],
                    borderColor: 'rgba(34, 197, 94, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Performance Capability Weight'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Normalized Score'
                    },
                    min: 0.05,
                    max: 0.30
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Sensitivity to Changes in Performance Weight',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}
