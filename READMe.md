NOTE:
--------------------

The framework of this project is from: https://github.com/webdriverio/cucumber-boilerplate [26-06-18]

The above mentioned project has an issue with "setValue". To fix the same, The selenium-standalone version is updated [0.0.10] in this project and also added a dependency for chromedriver ["chromedriver": "^2.40.0"]

ENVIRONMENT:
---------------------

"wdio-selenium-standalone-service": "0.0.10"

"chromedriver": "^2.40.0"

"wdio-cucumber-framework": "~2.1.0"
       
"webdriverio": "4.13.0"


HOW TO RUN
--------------------

1. DownLoad the project and extract it

2. Use command prompt and navigate to the root folder of the project [WDIO-Cucumber]

3. Execute the following command [This will take some time to complete]

	yarn install

4. Then to run the local server execute the following command 

	yarn run local-webserver

5. And to run multiple feature files together, execute the below command [It will take some time to start the execution for the first time and loading issues may occur if the internet speed is low  ]

	yarn run wdio

6. If you want to run a specific feature file , use the below command [It will take some time to start the execution for the first time ]

	yarn run wdio --spec ./src/features/featurefilename.feature

	- replace "featurefilename" with actual feature file name which you want to run
	- Example: yarn run wdio --spec ./src/features/GoogleSearchHalifax.feature
