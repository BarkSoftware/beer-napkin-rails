class AddTokenToNapkins < ActiveRecord::Migration
  def change
    add_column :napkins, :token, :string, limit: 36
  end
end
