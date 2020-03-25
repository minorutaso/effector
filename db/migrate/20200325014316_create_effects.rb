class CreateEffects < ActiveRecord::Migration[5.2]
  def change
    create_table :effects do |t|
      t.integer :user_id
      t.string :name,          null: false
      t.string :maker,           null: false
      t.string :attri,           null: false
      t.string :text
      
      t.timestamps
    end
  end
end
