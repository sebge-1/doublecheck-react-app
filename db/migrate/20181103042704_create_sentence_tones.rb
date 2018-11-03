class CreateSentenceTones < ActiveRecord::Migration[5.2]
  def change
    create_table :sentence_tones do |t|
      t.float :score
      t.string :tone_name
      t.integer :sentence_id
    end
  end
end
