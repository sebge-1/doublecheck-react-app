import { addProject } from './Actions/index.js'

export function toneAnalyzer(project) {
  let request = require("request");
  let toneUsername= "5be14bed-d818-4bd1-b4ca-e8b09dcc73b8";
  let tonePassword= "THTqBjmyU6k4";
  let toneUrl = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";

  let data = {};
  data.text = project.text

  request.post({
    url: toneUrl,
    json: data,
    auth: {
        user: toneUsername,
        pass: tonePassword
    }

  }, function (err, response, body){
      console.log(body);
  })
}
