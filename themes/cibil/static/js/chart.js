var myChart = {
    type: 'bar',
    data: {
        labels: ['Q1 18', 'Q2 18', 'Q3 18', 'Q4 18', 'Q1 19', 'Q2 19', 'Q3 19', 'Q4 19'],
        datasets: [
            {
                label: 'Working Capital',
                backgroundColor: '#FCB617',
                stack: 'Stack 0',
                data: [10,2,1,3,1,2,2,0]
            },
            {
                label: 'Forex',
                backgroundColor: '#1C11AB',
                stack: 'Stack 0',
                data: [1,2,1,0,1,2,2,0]
            },
            {
                label: 'Term Loan',
                backgroundColor: '#DFDFDF',
                stack: 'Stack 0',
                data: [5,6,7,1,9,10,11,12]
            },
            {
                label: 'Non Funded',
                backgroundColor: '#2CC2D9',
                stack: 'Stack 0',
                data: [5,6,7,0,9,10,11,12]
            },
            {
                label: 'Others',
                backgroundColor: '#157289',
                stack: 'Stack 0',
                data: [5,6,7,3,9,10,11,12]
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'units in (crores)',
                    fontColor: '#777777',
                    fontFamily: 'Helvetica Neue'
                }
            }],
        },
        legend: {
            display: false,
        }
    }
};



// Chart js graph
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [9,7,8,38,38],
            backgroundColor: [
                '#2CC2D9',
                '#FCB617',
                '#DFDFDF',
                '#1C11AB',
                '#157289',
            ],
            label: 'Dataset 1',
        }],
        labels: [
            'Non Funded',
            'Working Captial',
            'Term Loan',
            'Forex',
            'Others',
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }, 
        cutoutPercentage: 85,       
    }
};

var bank_config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [9,7,8,38,38],
            backgroundColor: [
                '#00A6CA',
                '#C3D4DB',
                '#157289',
                '#C5E7EE',
                '#7ED6FA',
            ],
            label: 'Dataset 1',
        }],
        labels: [
            'HDFC Bank',
            'Dena Bank',
            'Citi Bank',
            'RBS',
            'Others',
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }, 
        cutoutPercentage: 85,       
    }
};

var bank_type_config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70,20,10],
            backgroundColor: [
                '#00A6CA',
                '#C3D4DB',
                '#157289',
            ],
            label: 'Dataset 1',
        }],
        labels: [
            'Public',
            'Private',
            'NBFC',
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }, 
        cutoutPercentage: 85,       
    }
};

var data_years = [
    { t: moment('2015-01-01'), y: 10 },
    { t: moment('2015-03-01'), y: 20 },
    { t: moment('2015-05-01'), y: 30 },
    { t: moment('2015-07-01'), y: 20 },
    { t: moment('2015-09-01'), y: 50 },
    { t: moment('2015-11-01'), y: 60 },
    { t: moment('2016-01-01'), y: 50 },
    { t: moment('2016-02-01'), y: 40 },
    { t: moment('2016-04-01'), y: 35 },
    { t: moment('2016-06-01'), y: 40 },
    { t: moment('2016-08-01'), y: 30 },
    { t: moment('2016-10-01'), y: 20 },
    { t: moment('2016-12-01'), y: 10 },
]
var data_avg = [
    { t: moment('2015-01-01'), y: 48 },
    { t: moment('2016-12-01'), y: 48 },
]

var cfg = {
    data: {
        datasets: [{
            label: '',
            backgroundColor: 'rgba(28, 100, 139, 0.11)',
            borderColor: '#1c648b',
            data: data_years,
            type: 'line',
            pointRadius: 2,
            fill: true,
            lineTension: 0.3,
            borderWidth: 2
        },{
            label: '',
            backgroundColor: '#D74025',
            borderColor: '#D74025',
            data: data_avg,
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                        month: 'MMM'
                    }
                },    
                offset: true,
                ticks: {
                    source: 'data',
                    autoSkip: false,
                    autoSkipPadding: 30,
                    maxRotation: 100,
                    sampleSize: 0
                },      
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Price (₹)'
                }
            }]
        },
        tooltips: {
            intersect: false,
            mode: 'index',
            callbacks: {
                label: function(tooltipItem, myData) {
                    var label = myData.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += parseFloat(tooltipItem.value).toFixed(2);
                    return label;
                }
            }
        }
    }
};

var ctx,ctx1,ctx2,ctx3,ctx4
window.onload = function() {
    if(document.getElementById('exposure-trend-graph')){
        ctx = document.getElementById('exposure-trend-graph');
    }
    if(document.getElementById('credit-type-graph')){
        ctx1 = document.getElementById('credit-type-graph').getContext('2d');
    }
    if(document.getElementById('bank-graph')){
        ctx2 = document.getElementById('bank-graph').getContext('2d');
    }
    if(document.getElementById('bank-type-graph')){
        ctx3 = document.getElementById('bank-type-graph').getContext('2d');
    }
    if(document.getElementById('working-capital-graph')){
        ctx4 = document.getElementById('working-capital-graph').getContext('2d');
    }   
};

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$('.drilldown-content.report-summary').scroll(function() {   
    var elemnt1 = '#exposure-trend-graph';
    if ($(elemnt1).length && isScrolledIntoView(elemnt1)) {
        if(!$(elemnt1).hasClass('done')){
            window.myDoughnut = moment(new Chart(ctx, myChart));
            $(elemnt1).addClass('done');
        }
    }
    var elemnt2 = '#credit-type-graph';
    if ($(elemnt2).length && isScrolledIntoView(elemnt2)) {
        if(!$(elemnt2).hasClass('done')){
            window.myDoughnut2 = moment(new Chart(ctx1, config));
            $(elemnt2).addClass('done');
        }
    }
    var elemnt3 = '#bank-graph';
    if ($(elemnt3).length && isScrolledIntoView(elemnt3)) {
        if(!$(elemnt3).hasClass('done')){
            window.myDoughnut3 = moment(new Chart(ctx2, bank_config));
            $(elemnt3).addClass('done');
        }
    }
    var elemnt4 = '#bank-type-graph';
    if ($(elemnt4).length && isScrolledIntoView(elemnt4)) {
        if(!$(elemnt4).hasClass('done')){
            window.myDoughnut4 = moment(new Chart(ctx3, bank_type_config));
            $(elemnt4).addClass('done');
        }
    }
    var elemnt5 = '#working-capital-graph';
    if ($(elemnt5).length && isScrolledIntoView(elemnt5)) {
        if(!$(elemnt5).hasClass('done')){
            window.myDoughnut5 = moment(new Chart(ctx4, cfg));
            $(elemnt5).addClass('done');
        }
    }
});

$(window).scroll(function() {
    var elemnt1 = '#exposure-trend-graph';
    if ($(elemnt1).length && isScrolledIntoView(elemnt1)) {
        if(!$(elemnt1).hasClass('done')){
            window.myDoughnut = moment(new Chart(ctx, myChart));
            $(elemnt1).addClass('done');
        }
    }
    var elemnt2 = '#credit-type-graph';
    if ($(elemnt2).length && isScrolledIntoView(elemnt2)) {
        if(!$(elemnt2).hasClass('done')){
            window.myDoughnut2 = moment(new Chart(ctx1, config));
            $(elemnt2).addClass('done');
        }
    }
    var elemnt3 = '#bank-graph';
    if ($(elemnt3).length && isScrolledIntoView(elemnt3)) {
        if(!$(elemnt3).hasClass('done')){
            window.myDoughnut3 = moment(new Chart(ctx2, bank_config));
            $(elemnt3).addClass('done');
        }
    }
    var elemnt4 = '#bank-type-graph';
    if ($(elemnt4).length && isScrolledIntoView(elemnt4)) {
        if(!$(elemnt4).hasClass('done')){
            window.myDoughnut4 = moment(new Chart(ctx3, bank_type_config));
            $(elemnt4).addClass('done');
        }
    }
    var elemnt5 = '#working-capital-graph';
    if ($(elemnt5).length && isScrolledIntoView(elemnt5)) {
        if(!$(elemnt5).hasClass('done')){
            window.myDoughnut5 = moment(new Chart(ctx4, cfg));
            $(elemnt5).addClass('done');
        }
    }
});