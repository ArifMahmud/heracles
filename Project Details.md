# js-selenium-mocha

I have used javascript for both backend and frontend application. Mocha framework has been used for performing test over fronend and backend.
Jmeter has been as performance testing tool.

# Prerequisites
* JDK `8` or higher for Jmeter
* Apache Jmeter (Download Link: https://jmeter.apache.org/download_jmeter.cgi)
* Node.js (Download Link: https://nodejs.org/en/)

### How to run application and check the test case
1. After cloning the project, go to the directory `".\BE`
2. Run command "npm instal" and then "npm run start"
3. Now go to the directory `".\fe`
4. Run command "npm instal" and then "npm run start"
5. Now frontend and backend both application is running.
6. To run test for backend application, go to the directory `".\BE` and run command "npm run test"
7. To run test for frontend application, go to the directory `".\fe` and run command "npm run test"

### Performance Test
1. I have made a folder in this repository named "Performance Test" and a jmx file named "Pleo Test.jmx" and a csv file named "data.csv". Please check those files.
2. After downloading Apache Jmeter, go to .\bin directory and run "jmeter.bat file". Jmeter UI will be opened.
3. Import "Pleo Test.jmx" file in Jmeter.
4. Put "data.csv" file in .\bin directory.
5. Now click run from Jmeter UI.
6. You can configure the thread number for performance test. I have put total 10 data in csv file. If you want to make thread number 50/100 then
just put 50/100 data in csv file and make the Jmeter thread number 50/100 from Jmeter UI.
7. After running the test from Jmeter UI, you can view a details report in "Summary Report" from Jmeter UI
