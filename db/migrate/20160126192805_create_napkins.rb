class CreateNapkins < ActiveRecord::Migration
  def change
    create_table :napkins do |t|
      t.text :json
      t.integer :user_id
      t.text :image_data

      t.timestamps null: false
    end
  end
end
