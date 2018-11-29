import React from 'react';
import { Link } from 'react-router-dom';

import { stageRenames } from './rename';

export const header = [
  { title: 'Last Name', prop: 'LastName', filterable: true },
  { title: 'First Name', prop: 'FirstName' },
  { title: 'Educational Stage', prop: 'StageID', cell: row => stageRenames[row.StageID] },
  { title: 'Grade Level', prop: 'GradeID' },
  { title: 'Class Room', prop: 'SectionID' },
  { title: 'Topic', prop: 'Topic' },
  { title: 'Action', prop: 'ID', cell: row => <Link to={`/students/${row.ID}`}>View more</Link> }
];

export const customLabels = {
  first: '<<',
  last: '>>',
  prev: '<',
  next: '>',
  show: 'Display',
  entries: 'rows',
  noResults: 'There is no data to be displayed',
};