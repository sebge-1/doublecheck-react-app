class RemoveTextFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :text, :string
  end
end
