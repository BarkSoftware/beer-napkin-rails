class AddUsernameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string, limit: 250
  end
end
