export function toneAnalyzer(project) {
  let toneUsername= "5be14bed-d818-4bd1-b4ca-e8b09dcc73b8";
  let tonePassword= "THTqBjmyU6k4";
  let toneUrl = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";
  let data = {};
  data.text = project.text
  let request = require("request");

  return new Promise(
    (resolve, reject) => {
     request.post(
       {
         url: toneUrl,
         json: data,
         auth: {
           user: toneUsername,
           pass: tonePassword
         }
       }, function(err, res, data) {
            if (err) reject(err);

            resolve(data);
          })
    }
  );
}
