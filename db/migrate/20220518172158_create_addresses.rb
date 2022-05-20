class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.belongs_to :bottle, null: false, foreign_key: true
      t.string :line_1
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :country
      t.float :latitude
      t.float :longitude
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
