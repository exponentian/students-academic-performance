const initialState = {
  isFetched: false,
  data: {
    all: [],
    byId: {}
  },
};


// Get a new object for data by id
const getById = students => {
  return students.reduce((obj, student) => {
    obj[student.ID] = student;
    
    return obj; 
  }, {});
};


// Get a new object for data by gender
export const getByGender = students => {
  return students.reduce((obj, student) => {
    if (obj[student.Gender] === undefined) {
      obj[student.Gender] = [];
    }
    obj[student.Gender].push(student);

    return obj;
  }, {});
};


// Get a new object for data by nationality
export const getByNationality = students => {
  return students.reduce((obj, student) => {
    if (obj[student.Nationality] === undefined) {
      obj[student.Nationality] = [];
    }
    obj[student.Nationality].push(student);

    return obj;
  }, {});
};


// Get a new object for data by grade
export const getByGrade = students => {
  return students.reduce((obj, student) => {
    if (obj[student.GradeID] === undefined) {
      obj[student.GradeID] = [];
    }
    obj[student.GradeID].push(student);

    return obj;
  }, {});
};

// Get a new object for data by class
export const getByClass = students => {
  return students.reduce((obj, student) => {
    if (obj[student.Class] === undefined) {
      obj[student.Class] = [];
    }
    obj[student.Class].push(student);

    return obj;
  }, {});
}


// Get a new object for data by topic
export const getByTopic = students => {
  return students.reduce((obj, student) => {
    if (obj[student.Topic] === undefined) {
      obj[student.Topic] = [];
    }
    obj[student.Topic].push(student);

    return obj;
  }, {});
}


// Get min, max, mean, and median values
const getStatsValues = arr => {
  
  // Sort an input array
  arr.sort((a, b) => a - b);
  
  let min = arr[0];
  let max = arr[arr.length-1];
  
  // Get a sum
  let sum = 0;
  for (let a of arr) sum += a;
  
  
  // Get a median value
  let median;
  if (arr.length % 2 === 0) {
    const second = parseInt(arr.length / 2);
    const first = second - 1;
    median = (arr[first] + arr[second]) / 2;
  } else {
    const mid = parseInt(arr.length / 2);
    median = arr[mid];
  }
  
  return {
    min: min,
    max: max, 
    mean: parseInt(sum / arr.length),
    median: parseInt(median)
  };
};

// get statistics for behaviour data
export const getStatistics = students => {
  const values = students.reduce((obj, student) => {
    if (obj['RaisedHands'] === undefined) obj['RaisedHands'] = [];
    obj['RaisedHands'].push( parseInt(student.RaisedHands) );
    
    if (obj['VisitedResources'] === undefined) obj['VisitedResources'] = [];
    obj['VisitedResources'].push( parseInt(student.VisitedResources) );
    
    if (obj['AnnouncementsView'] === undefined) obj['AnnouncementsView'] = [];
    obj['AnnouncementsView'].push( parseInt(student.AnnouncementsView) );
    
    if (obj['Discussion'] === undefined) obj['Discussion'] = [];
    obj['Discussion'].push( parseInt(student.Discussion) );
    
    return obj;
  }, {});

  const stats = {};
  for (let key in values) {
    stats[key] = getStatsValues( values[key] );
  }

  return stats;
};


const students = (state=initialState, action) => {

  switch (action.type) {
    case 'FETCH_STUDENTS_SUCCESS':
      return {
        ...state,
        isFetched: true,
        data: {
          all: action.data,
          byId: getById(action.data)
        }
      };

    default:
      return state;
  }
};

export default students;