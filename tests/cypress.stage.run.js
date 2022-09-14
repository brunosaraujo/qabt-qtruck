const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNmZmUxMmQ1LTA5NWYtNDMxYS05NmUxLWFlMDA3ZDBjMWNmMS0xNjYzMTU3Mzk3MjIyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzZkMzI0NmMtZDRhYi00ZTIwLTkzZGUtZjM1NTFjN2U5NDE2IiwidHlwZSI6InQifQ.PK_uFnuREFetE3VdJ3DAt7i8H9k--pUkgy4P12PzCQ8'

cypress.run({
  browser: 'chrome',
  baseUrl: 'https://stage.qtruck.com.br',
  env: {
    apiUrl: 'https://stage.api.qtruck.com.br'
  }
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})