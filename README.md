# Web-based data analysis
## Example: Students' Academic Performance Dataset
### Technologies: React and Redux
#### Author: Ho Seok (Brandon) Oh


> I am using [Students' Academic Performance Dataset](https://www.kaggle.com/aljarah/xAPI-Edu-Data) in [Kaggle](https://www.kaggle.com/) Datasets. Also, I add some fake students' information such as FirstName, LastName, Phone, and etc with [faker](https://github.com/marak/Faker.js/).


#### Objectives
- Understanding of React and Redux
- Converting CSV file to JSON
- Implementing an open source chart library - [Chart.js](https://www.chartjs.org/)
- Using Frontend stylesheet libraries - [Bootstrap](https://react-bootstrap.github.io/), [Font Awesome](https://fontawesome.com/), [SASS](https://github.com/michaelwayman/node-sass-chokidar#readme)


> Before implementing this web application, I first try to anlayze this dataset on a [Jupyter notebook](jupyter-notebook/exploratory-data-analysis.ipynb) with Python and [scikit-learn](https://scikit-learn.org/stable/) to check whether missing values exist and to understand several features. Also, I perform Machine Learning algorithms to get more important features.


#### How to convert CSV file to JSON
```
$ node csvToJson.js
```

> I've already converted CSV file to JSON called **students.json** which is located in the public folder.


#### To start

1. Download or clone

```
$ git clone https://github.com/exponentian/students-academic-performance.git
```

2. Go to the folder

```
$ cd students-academic-performance
```

3. Install npm packages

```
$ npm install
```

4. Start

```
$ npm start
```


Happy coding!
