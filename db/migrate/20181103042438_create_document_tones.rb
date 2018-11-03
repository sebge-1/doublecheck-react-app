class CreateDocumentTones < ActiveRecord::Migration[5.2]
  def change
    create_table :document_tones do |t|
      t.integer :document_id
      t.float :score
      t.string :tone_name
    end
  end
end
