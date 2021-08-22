const fetch = require('node-fetch');
const fs = require('fs');
const shell = require('shelljs');

const SHEET_KEY = '1aKaEzOVSxhggU_ydTTvlxGID_rkBPIbS9_WZrQVREpo';
const API_KEY = 'AIzaSyBkVSguhj9zn8KZ0FmfsDvN9jr4kZhxg54';
const SRC_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_KEY}/values/A%3AW?key=${API_KEY}`;

const HEADER_KEYS = [
  'createDate',
  'className',
  'studyTime',
  'teaher',
  'classOpen',
  'section',
  'classType',
  'ifHistory',
  'lvLearned',
  'lvFun',
  'lvWork',
  'ifGroupReport',
  'ifPersonalReport',
  'ifOtherWork',
  'lvExamAmount',
  'ifSmallExam',
  'ifMidExam',
  'ifFinalExam',
  'ifOtherExam',
  'lvTeachlear',
  'lvRequest',
  'lv_recommend',
  'message',
];

async function run() {
  console.log('(1/3) fetching data...');
  const res = await fetch(SRC_URL);
  const outputData = {
    Header: {},
    Data: [],
  };
  let resData = await res.json();
  resData = resData.values;

  const headerValueArr = resData.shift();
  console.log(`(2/3) parsing ${headerValueArr.length} comments`);

  HEADER_KEYS.forEach((item, index) => {
    outputData.Header[item] = headerValueArr[index];
  });

  resData.forEach((item, classIndex) => {
    const tObj = {
      index: classIndex + 1,
    };
    HEADER_KEYS.forEach((key, index) => {
      tObj[key] = item[index];
    });
    outputData.Data.push(tObj);
  });

  try {
    fs.writeFileSync('data.json', JSON.stringify(outputData));
    console.log('(3/3) The Data.json has been saved.');
  } catch (err) {
    console.error('An error occurred while writing Data.json.');
  }

  if (shell.exec('git add data.json').code !== 0) {
    shell.echo('Error: Git add failed');
    shell.exit(1);
  }
  const now = Math.floor(Date.now() / 1000);
  const commitMessage = `[DATA] update data (${now})`;
  if (shell.exec(`git commit -m "${commitMessage}"`).code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }
  if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git push failed');
    shell.exit(1);
  }
}

run();
