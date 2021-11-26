class UpdateSettled < ActiveRecord::Migration[5.2]
  def change
    remove_column :expenses, :settlexd
    # add_column :expenses, :settled, :boolean
  end
end
