class AddImgToProjects < ActiveRecord::Migration[5.2]
  def change
     add_column :projects, :img, :string
  end
end
