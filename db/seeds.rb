# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project = Project.create([
  {
    text: "If your releases always require people to stay late, your process sucks. Change that rather than indulge in discrimination against people with families (or lives in general, outside of work). Don't burn out people as a crutch for fixing your company or your culture." ,
    result: {"document_tone":{"tones":[{"score":0.630316,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.847026,"tone_id":"analytical","tone_name":"Analytical"},{"score":0.712742,"tone_id":"tentative","tone_name":"Tentative"}]},"sentences_tone":[{"sentence_id":0,"text":"If your releases always require people to stay late, your process sucks.","tones":[{"score":0.80026,"tone_id":"confident","tone_name":"Confident"}]},{"sentence_id":1,"text":"Change that rather than indulge in discrimination against people with families (or lives in general, outside of work).","tones":[{"score":0.920855,"tone_id":"analytical","tone_name":"Analytical"},{"score":0.635904,"tone_id":"tentative","tone_name":"Tentative"}]},{"sentence_id":2,"text":"Don't burn out people as a crutch for fixing your company or your culture.","tones":[{"score":0.681699,"tone_id":"tentative","tone_name":"Tentative"}]}]}
  },
  {
    text: "I just got my first trick-or-treaters in *years* and it made me so happy that I got vegan chocolate snack bars just in case. In my excitement, I gave them each an excessive amount, and they said, “Wow, you’re really nice.”
      Best day.",
    result: {
      "document_tone":{
        "tones":[
          {"score":0.900381,"tone_id":"joy","tone_name":"Joy"},
          {"score":0.827288,"tone_id":"tentative","tone_name":"Tentative"}]},
        "sentences_tone":[
          {"sentence_id":0,
            "text":"I just got my first trick-or-treaters in *years* and it made me so happy that I got vegan chocolate snack bars just in case.",
            "tones":[
              {"score":0.805808, "tone_id":"joy","tone_name":"Joy"},
              {"score":0.769251,"tone_id":"tentative","tone_name":"Tentative"}
            ]
          },
          {"sentence_id":1,
            "text":"In my excitement, I gave them each an excessive amount, and they said, 'Wow, you’re really nice.'",
            "tones":[
              {"score":0.728899,
                "tone_id":"joy",
                "tone_name":"Joy"}
              ]
            },
          {"sentence_id":2,
            "text":"Best day.",
            "tones":[
              {"score":0.882892,
                "tone_id":"joy",
                "tone_name":"Joy"}
              ]
            }
          ]
        }
  }
  ])
