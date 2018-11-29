// Convert CSV file to JSON

const uuid = require('uuid/v4');
const faker = require('faker');
const fs = require('fs');
const Papa = require('papaparse');

const csvFile = './public/xAPI-Edu-Data.csv';
const jsonFile = './public/students.json';


const numAttributes = 17;

const renames = {
  "gender": "Gender",
  "NationalITy":"Nationality",
  "PlaceofBirth":"PlaceOfBirth",
  "raisedhands": "RaisedHands",
  "VisITedResources": "VisitedResources"
};

const ages = {
  "G-01": 8,
  "G-02": 9,
  "G-03": 10,
  "G-04": 11,
  "G-05": 12,
  "G-06": 13,
  "G-07": 14,
  "G-08": 15,
  "G-09": 16,
  "G-10": 17,
  "G-11": 18,
  "G-12": 19,
};

const addInfo = student => {
  const { name, phone, address } = faker;
  const fname = name.firstName();
  const lname = name.lastName();

  student['ID'] = uuid();
  student['FirstName'] = fname;
  student['LastName'] = lname
  student['Email'] = `${fname}.${lname}@example.com`;
  student['UserName'] = `${fname}${lname}`;
  student['Phone'] = phone.phoneNumber();
  student['Age'] = ages[student.GradeID];
  student['Address'] = address.streetAddress();
  student['City'] = address.city();
  student['State'] = address.state();

  return student;
};


const students = [];
let count = 0;
let headers;

const content = fs.readFileSync(csvFile, 'utf8');

Papa.parse(content, {
  header: false,
  step: row => {
    if (count === 0) {
      headers = row.data[0];
      headers = headers.map(header => 
        renames[header] !== undefined ? header = renames[header] : header);
    
    } else {
      let data = row.data[0];

      // Check each row equals to a number of attributes
      if (data.length === numAttributes) {
        let student = {};

        for (let i = 0; i < headers.length; i++) {
          student[headers[i]] = data[i];
        }
        const addStudent = addInfo(student);
        students.push( addStudent );
      }
    }

    count++;
  },
  complete: () => {
    const data = { students };
    fs.writeFile (jsonFile, JSON.stringify(data), err => {
      if (err) throw err;
        console.log('students.json saved successully!');
      }
    );
  }
});