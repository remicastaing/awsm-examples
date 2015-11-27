## Awsm Example
AWSM Example is an example [awsm](https://github.com/awsm-org/awsm) module around some very elementary bricks.

### What does this project demonstatrate?
* `testget1` shows an elementary GET lambda endpoint
* `testget2` shows an elementary GET lambda endpoint with two variables as query string parameters
* `testget3` shows an elementary GET lambda endpoint with a variable as part of the URL
* `testpost` shows an elementary POST lambda endpoint

## Usage

Create a jaws project:
```
jaws project create
```

Change to your new JAWS project root directory and run:
```
npm install --save awsm-examples
npm install
jaws postinstall awsm-examples npm
jaws deploy resources
jaws dash
```

## Environment Variables
There is no need for environment variables.


