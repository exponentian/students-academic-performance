import { 
  getByGender, 
  getByNationality,
  getByGrade,
  getByClass,
  getByTopic
} from '../reducers/students';

import { 
  firstLetterUpperCase, 
  countryRenames,
  classRenames
} from './rename';

const colorArr = [
  "red", "blue", "orange", "purple", "yellow", 
  "green", "sky-blue", "bluish-violet", "light-blue", "gray",
  "pink", "chartreuse", "dark-red", "light-salmon", "lime-green",
  "silver"
];

export const colours = {
  "red": {
    "opacity-0.2": 'rgba(255, 99, 132, 0.2)',
    "opacity-0.8": 'rgba(255, 99, 132, 0.8)',
    "opacity-1": 'rgba(255, 99, 132, 1)'
  },
  "orange": {
    "opacity-0.2": 'rgba(255, 159, 64, 0.2)',
    "opacity-0.8": 'rgba(255, 159, 64, 0.8)',
    "opacity-1": 'rgba(255, 159, 64, 1)'
  },
  "blue": {
    "opacity-0.2": 'rgba(54, 162, 235, 0.2)',
    "opacity-0.8": 'rgba(54, 162, 235, 0.8)',
    "opacity-1": 'rgba(54, 162, 235, 1)'
  },
  "purple": {
    "opacity-0.2": 'rgba(153, 102, 255, 0.2)',
    "opacity-0.8": 'rgba(153, 102, 255, 0.8)',
    "opacity-1": 'rgba(153, 102, 255, 1)'
  },
  "yellow": {
    "opacity-0.2": 'rgba(244,232,66, 0.2)',
    "opacity-0.8": 'rgba(244,232,66, 0.8)',
    "opacity-1": 'rgba(244,232,66, 1)'
  },
  "green": {
    "opacity-0.2": 'rgba(80,244,66, 0.2)',
    "opacity-0.8": 'rgba(80,244,66, 0.8)',
    "opacity-1": 'rgba(80,244,66, 1)'
  },
  "sky-blue": {
    "opacity-0.2": 'rgba(66,244,206, 0.2)',
    "opacity-0.8": 'rgba(66,244,206, 0.8)',
    "opacity-1": 'rgba(66,244,206, 1)'
  },
  "bluish-violet": {
    "opacity-0.2": 'rgba(153,102,255, 0.2)',
    "opacity-0.8": 'rgba(153,102,255, 0.8)',
    "opacity-1": 'rgba(153,102,255, 1)'
  },
  "light-blue": {
    "opacity-0.2": 'rgba(75,192,192, 0.2)',
    "opacity-0.8": 'rgba(75,192,192, 0.8)',
    "opacity-1": 'rgba(75,192,192, 1)'
  },
  "gray": {
    "opacity-0.2": 'rgba(127,127,130, 0.2)',
    "opacity-0.8": 'rgba(127,127,130, 0.8)',
    "opacity-1": 'rgba(127,127,130, 1)'
  },
  "pink": {
    "opacity-0.2": 'rgba(239,4,173, 0.2)',
    "opacity-0.8": 'rgba(239,4,173, 0.8)',
    "opacity-1": 'rgba(239,4,173, 1)'
  },
  "chartreuse": {
    "opacity-0.2": 'rgba(127, 255, 0, 0.2)',
    "opacity-0.8": 'rgba(127, 255, 0, 0.8)',
    "opacity-1": 'rgba(127, 255, 0, 1)'
  },
  "dark-red": {
    "opacity-0.2": 'rgba(139, 0, 0, 0.2)',
    "opacity-0.8": 'rgba(139, 0, 0, 0.8)',
    "opacity-1": 'rgba(139, 0, 0, 1)'
  },
  "light-salmon": {
    "opacity-0.2": 'rgba(255, 160, 122, 0.2)',
    "opacity-0.8": 'rgba(255, 160, 122, 0.8)',
    "opacity-1": 'rgba(255, 160, 122, 1)'
  },
  "lime-green": {
    "opacity-0.2": 'rgba(50, 205, 50, 0.2)',
    "opacity-0.8": 'rgba(50, 205, 50, 0.8)',
    "opacity-1": 'rgba(50, 205, 50, 1)'
  },
  "silver": {
    "opacity-0.2": 'rgba(192, 192, 192, 0.2)',
    "opacity-0.8": 'rgba(192, 192, 192, 0.8)',
    "opacity-1": 'rgba(192, 192, 192, 1)'
  },
 
 
};

export const options = {
  barChart: (yLabel, beginAtZero, legend) => {
    return {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: beginAtZero
          },
          scaleLabel: {
            display: true,
            labelString: yLabel
          }
        }]
      },
      legend: {
        display: legend
      }
    };
  },
  radarChart: () => {
    return {
      responsive: true,
      scale: {
        reverse: true,
        ticks: {
          beginAtZero: true
        }
      }
    };
  },
  pieChart: () => {
    return {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const dataset = data.datasets[ tooltipItem.datasetIndex ];
            const total = dataset.data.reduce((previousValue, currentValue, currentIndex, array) => 
              previousValue + currentValue);

            const currentValue = dataset.data[tooltipItem.index];
            const commaValue = addComma( dataset.data[tooltipItem.index], 0 );
            const precentage = Math.floor( ((currentValue / total) * 100) + 0.5 );

            return commaValue + " (" + precentage + "%)";
          }
        }
      }
    };
  },
  stackedBarChart: (yLabel, num) => {
    return {
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            callback: (label, index, labels) => label
          },
          scaleLabel: {
            display: true,
            labelString: yLabel
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const total = data.datasets[num].data[tooltipItem.index];

            const currentValue = dataset.data[tooltipItem.index];
            const commaValue = addComma(dataset.data[tooltipItem.index], 0);
            const precentage = Math.floor( ((currentValue / total) * 100) + 0.5 );

            return commaValue + " (" + precentage + "%)";
          }
        }
      }
    };
  },
  polarAreaChart: () => {
    return {
      elements: {
        arc: {borderColor: "#fff"}
      }
    }
  },
  scatterPlot: (xLabel, yLabel) => {
    return {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: xLabel
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: yLabel
          }
        }]
      }
    }
  },
  bubblePlot: (xLabel, yLabel) => {
    return {
      elements: {
        points: {
          borderWidth: 1,
          borderColor: 'rgb(0, 0, 0)'
        }
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: xLabel
          }
        }],
        yAxes: [{
          scaleLabel: {
              display: true,
              labelString: yLabel
           }
         }]
      }
    }
  }
};



// gender chart
export const makeGenderChart = students => {
  const byGender = getByGender(students);

  return {
    data: {
      labels: [ 'Female', 'Male' ],
      datasets: [{
        data: [ byGender['F'].length, byGender['M'].length ],
        backgroundColor: getBackgroundColor(Object.keys(byGender).length)
      }]
    },
    options: options.pieChart()
  };
};


// nationality chart
export const makeNationalityChart = students => {
  const byNationality = getByNationality(students);

  const counrtyNames = [];
  const counrtyStudents = [];
  
  for (let name in byNationality) {
    const students = byNationality[name].length;

    if ( countryRenames[name] === undefined ) {
      counrtyNames.push( firstLetterUpperCase(name) );
    } else {
      counrtyNames.push( countryRenames[name] );
    }
    counrtyStudents.push(students);
  }

  return {
    data: {
      labels: counrtyNames,
      datasets: [{
        label: "Number of students",
        data: counrtyStudents,
        backgroundColor: getBackgroundColor(counrtyNames.length),
        borderColor: getBorderColor(counrtyNames.length),
        borderWidth: 1
      }]
    },
    options: options.barChart("Number of students", true, false)
  }
};



// Grade chart
export const makeGradeChart = students => {
  const byGrade = objectSortASC( getByGrade(students) );

  const gradeNames = [];
  const gradeMales = [];
  const gradeFemales = [];
  const gradeTotal = [];
  

  for (let grade in byGrade) {
    gradeNames.push(grade);
    const students = byGrade[grade];

    let male = 0;
    let female = 0;
    let total = 0;
    for (let student of students) {
      if (student.Gender === 'M') male++;
      else female++;

      total++;
    }
    gradeMales.push(male);
    gradeFemales.push(female);
    gradeTotal.push(total);
  }

  return {
    data: {
      labels: gradeNames,
      datasets: [
        {
          type: "bar",
          label: "Male",
          data: gradeMales,
          backgroundColor: colours['blue']['opacity-0.8']
        },
        {
          type: "bar",
          label: "Female",
          data: gradeFemales,
          backgroundColor: colours['red']['opacity-0.8']
        },
        {
          type: "line",
          label: "Total",
          data: gradeTotal,
          fill: false,
          backgroundColor: colours['gray']['opacity-0.8'],
          borderColor: colours['gray']['opacity-1'],
          borderWidth: 0.1,
          borderJoinStyle: 'round',
          lineTension: 0.1,
          autoSkip: true
        }
      ]
    },
    options: options.stackedBarChart("Number of students", 2)
  };


};


// Class chart
export const makeClassChart = students => {
  const byClass = getByClass(students);

  return {
    data: {
      labels: [ 'Lower Level', 'Middle Level', 'High Level' ],
      datasets: [{
        data: [ byClass['L'].length, byClass['M'].length, byClass['H'].length ],
        backgroundColor: getBackgroundColor(Object.keys(byClass).length)
      }]
    },
    options: options.polarAreaChart()
  };
};



// Topic chart
export const makeTopicChart = students => {
  const byTopic = getByTopic(students);

  const topicNames = [];
  const topicValues = [];

  for (let topic in byTopic) {
    topicNames.push(topic);
    topicValues.push( byTopic[topic].length );
  }

  return {
    data: {
      labels: topicNames,
      datasets: [{
        data: topicValues,
        backgroundColor: getBackgroundColor(topicNames.length)
      }]
    },
    options: options.barChart("Number of students", true, false)
  };
};


// Topic with Class chart
export const makeTopicClassChart = students => {
  const byTopic = getByTopic(students);
  const topicNames = [];
  
  for (let topic in byTopic) {
    topicNames.push(topic);
  }
  
  topicNames.sort();
  
  // default topic object
  const topicObj = {};
  for (let topic of topicNames) topicObj[topic] = 0;
  

  // get data by class
  const classes = getByClass(students);

  // re-order
  const byClass = {
    "L": classes['L'],
    "M": classes['M'],
    "H": classes['H']
  };

  const datasets = [];

  let i = 0;
  for (let cl in byClass) {
    let students = byClass[cl];

    // Copy a default topic object
    const topics = Object.assign({}, topicObj);
    for (let student of students) {
      topics[student.Topic]++;
    }

    const topicCounts = [];
    for (let topic in topics) {
      topicCounts.push( topics[topic] );
    }

    // Add topic counts into datasets
    datasets.push({
      "label": classRenames[cl],
      "data": topicCounts,
      "backgroundColor": colours[colorArr[i]]['opacity-0.8'],
      "borderColor": colours[colorArr[i]]['opacity-1'],
      "borderWidth": 1
    });

    i++;
  }

  return {
    data: {
      labels: topicNames,
      datasets: datasets
    },
    options: options.barChart("Number of students", true, true)
  };
};



export const makeRaisedHandsVisitedResourcesChart = students => {
  const data = [];

  for (let student of students) {
    data.push({
      x: student.RaisedHands,
      y: student.VisitedResources
    });
  }

  return {
    data: {
      datasets: [{
        label: 'Raised Hands over Visited Resources',
        data: data,
        backgroundColor: colours['blue']['opacity-0.2'],
        borderColor: colours['blue']['opacity-0.8']
      }]
    },
    options: options.scatterPlot('Raised Hands (Number of times)', 'Visited Resources (Number of times)')
  };
};


// Announcements View over Discussion with Topic
export const makeAnnouncementsViewDiscussionTopicChart = students => {
  const byTopic = getByTopic(students);
  
  const datasets = [];

  let i = 0;
  for (let topic in byTopic) {
    const students = byTopic[topic];

    let announcementsView = 0;
    let discussion = 0;
    for (let student of students) {
      announcementsView += parseInt(student.AnnouncementsView);
      discussion += parseInt(student.Discussion);
    }

    datasets.push({
      label: topic,
      data: [{
        x: announcementsView,
        y: discussion,
        r: students.length
      }],
      backgroundColor: colours[colorArr[i]]['opacity-0.8'],
      borderColor: colours[colorArr[i]]['opacity-1']
    });

    i++;
  }

  return {
    data: {
      datasets: datasets
    },
    options: options.bubblePlot("Announcements View (Number of times)", "Discussion (Number of times)")
  };
};


// Raised Hands over Discussion with Nationality
export const makeRaisedHandsDiscussionNationalityChart = students => {
  const byNationality = getByNationality(students);
  const datasets = [];

  let i = 0;
  for (let nationality in byNationality) {
    const students = byNationality[nationality];

    let raisedHands = 0;
    let discussion = 0;
    for (let student of students) {
      raisedHands += parseInt(student.RaisedHands);
      discussion += parseInt(student.Discussion);
    }

    datasets.push({
      label: countryRenames[nationality] === undefined ? firstLetterUpperCase(nationality) : countryRenames[nationality],
      data: [{
        x: raisedHands,
        y: discussion,
        r: students.length
      }],
      backgroundColor: colours[colorArr[i]]['opacity-0.8'],
      borderColor: colours[colorArr[i]]['opacity-1']
    });

    i++;
  }

  return {
    data: {
      datasets: datasets
    },
    options: options.bubblePlot("Raised Hands (Number of times)", "Discussion (Number of times)")
  };
};


// get total count of behaviour bata
export const getBehaviourCountData = student => {
  return {
    labels: ["RaisedHands", "VisitedResources", "AnnouncementsView", "Discussion"],
    datasets: [{
      label: 'Count',
      data: [
        student.RaisedHands, 
        student.VisitedResources, 
        student.AnnouncementsView, 
        student.Discussion
      ],
      backgroundColor: getBackgroundColor(4),
      borderColor: getBorderColor(4),
      borderWidth: 1
    }]
  };
};


// get mean of behaviour bata
export const getBehaviourMeanData = (student, statistics) => {
  return {
      labels: ["RaisedHands", "VisitedResources", "AnnouncementsView", "Discussion"],
      datasets: [{
        label: `${student.FirstName} Total`,
        data: [
          student.RaisedHands, 
          student.VisitedResources, 
          student.AnnouncementsView, 
          student.Discussion
        ],
        backgroundColor: colours.red['opacity-0.2'],
        borderColor: colours.red['opacity-0.8'],
        pointBackgroundColor: colours.red['opacity-1'],
        pointBorderColor: colours.red['opacity-1'],
        pointHoverBackgroundColor: colours.red['opacity-0.8'],
        pointHoverBorderColor: colours.red['opacity-1'],
      },
      {
        label: 'School Average',
        data: [
          statistics.RaisedHands.mean, 
          statistics.VisitedResources.mean, 
          statistics.AnnouncementsView.mean, 
          statistics.Discussion.mean
        ],
        backgroundColor: colours.blue['opacity-0.2'],
        borderColor: colours.blue['opacity-0.8'],
        pointBackgroundColor: colours.blue['opacity-1'],
        pointBorderColor: colours.blue['opacity-1'],
        pointHoverBackgroundColor: colours.blue['opacity-0.8'],
        pointHoverBorderColor: colours.blue['opacity-1']
      }]
    };
};





// Helper functions
function getBackgroundColor(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push( colours[ colorArr[i] ]['opacity-0.8'] );
  }
  return arr;
};

function getBorderColor(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push( colours[ colorArr[i] ]['opacity-1'] );
  }
  return arr;
};


function addComma(num, precision) {
  return Number(num).toFixed(precision).replace(/./g, (c, i, a) => {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}

function objectSortASC(data) {
  const obj = {};
  Object.keys(data).sort().forEach(key => {
    obj[key] = data[key];
  });
  return obj;
}
