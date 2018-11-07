class CreateTones < ActiveRecord::Migration[5.2]
  def change
    create_table :tones do |t|
      t.float :score
      t.string :tone_name
      t.integer :analyzable_id
      t.string :analyzable_type
    end
  end
end
