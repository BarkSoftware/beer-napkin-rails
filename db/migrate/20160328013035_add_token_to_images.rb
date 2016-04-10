class AddTokenToImages < ActiveRecord::Migration
  def change
    add_column :images, :token, :string
  end
end
