export const firstLetterUpperCase = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const genderRenames = {
  "M": "Male",
  "F": "Female"
};

export const semesterRenames = {
  "F": "First",
  "S": "Second"
};

export const countryRenames = {
  "KW": "Kuwait",
  "KuwaIT": "Kuwait",
  "SaudiArabia": "Saudi Arabia"
};

export const classRenames = {
  "L": "Lower Level",
  "M": "Middle Level",
  "H": "High Level"
};

export const stageRenames = {
  "lowerlevel": "Lower Level",
  "MiddleSchool": "Middle School",
  "HighSchool": "High School"
};