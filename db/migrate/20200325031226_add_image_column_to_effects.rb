class AddImageColumnToEffects < ActiveRecord::Migration[5.2]
  def change
    add_column :effects, :image, :string
  end
end
