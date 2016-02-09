class RemoveImageDataFromNapkins < ActiveRecord::Migration
  def change
    remove_column :napkins, :image_data
  end
end
