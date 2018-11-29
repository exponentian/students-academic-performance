export const fetchStudents = data => dispatch => {
  dispatch({ 
    type: 'FETCH_STUDENTS_SUCCESS', 
    data
  });
};