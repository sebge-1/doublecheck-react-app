# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project = Project.create
document = project.create_document({text: "If your releases always require people to stay late, your process sucks. Change that rather than indulge in discrimination against people with families (or lives in general, outside of work). Don't burn out people as a crutch for fixing your company or your culture."})
document.document_tones.create(
  [{"score":0.630316, "tone_name":"Sadness"},{"score":0.847026, "tone_name":"Analytical"},{"score":0.712742, "tone_name":"Tentative"}]
)
sentence = document.sentences.create({text: "If your releases always require people to stay late, your process sucks." })
sentence.sentence_tones.create([{score: 0.55, tone_name: "Confident"}, {score: 0.634, tone_name: "Analytical"}])
