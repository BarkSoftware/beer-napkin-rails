class AddImageToNapkins < ActiveRecord::Migration
  def change
    add_column :napkins, :image, :string
  end
end
