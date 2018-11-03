class RemoveResultFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :result, :string
  end
end
