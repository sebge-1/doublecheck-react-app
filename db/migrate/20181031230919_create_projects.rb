class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :text
      t.string :result

      t.timestamps
    end
  end
end
