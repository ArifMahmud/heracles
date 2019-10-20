# js-selenium-mocha

[![CircleCI](https://circleci.com/gh/ArifMahmud/heracles.svg?style=svg)](https://circleci.com/gh/ArifMahmud/heracles)

I have used javascript for both backend and frontend application. Mocha framework has been used for performing test over fronend and backend.
Jmeter has been as performance testing tool.

# Prerequisites
* JDK `8` or higher for Jmeter
* Apache Jmeter (Download Link: https://jmeter.apache.org/download_jmeter.cgi)
* Node.js (Download Link: https://nodejs.org/en/)

### How to run application and check the test case
1. After cloning the project, go to the directory `".\BE"`
2. Run command `npm install` and then `npm run start`
3. Now go to the directory `".\fe"`
4. Run command `npm install` and then `npm run start`
5. Now frontend and backend both application is running.
6. To run test for backend application, go to the directory `".\BE"` and run command `npm run test`
7. To run test for frontend application, go to the directory `".\fe"` and run command `npm run test`

### Performance Test
1. I have made a folder in this repository named "Performance Test" and a jmx file named "Pleo Test.jmx" and a csv file named "data.csv". Please check those files.
2. After downloading Apache Jmeter, go to .\bin directory and run "jmeter.bat file". Jmeter UI will be opened.
3. Import "Pleo Test.jmx" file in Jmeter.
4. Put "data.csv" file in .\bin directory.
5. Now click run from Jmeter UI.
6. You can configure the thread number for performance test. I have put total 10 data in csv file. If you want to make thread number 50/100 then
just put 50/100 data in csv file and make the Jmeter thread number 50/100 from Jmeter UI.
7. After running the test from Jmeter UI, you can view a details report in "Summary Report" from Jmeter UI

### CI pipeline setup
* The CircleCI pipeline configuration can be found at /heracles/.circleci/config.yml
* You can also integrate performance testing with Jenkins tool by following my article https://www.linkedin.com/feed/update/urn:li:activity:6554023974714597376

### Test Types and Thinking
1. At first drafted a sudo algorithm which covers all cases related to the task
2. Select language and test framework
3. Project is structure as Backend (Folder: BE) and Frontend(Folder: fe)
4. Tests is performed seperately for BE and fe
5. Functionality has been put as a json API which helps to mobilize performance test script
6. Unit testing is performed for BE and UI testing is performed for fe and performance test is performed for the project
7. Draw out all corner cases and implement those in BE
8. Integrate with CircleCI pipeline

### Further Improvement
1. Json API could be removed as it put extra payload to project
2. POM structure could be followed for UI testing
3. log4j could be integrated for a better log viewing option

* I have worked for 17+ hours for this task
