class AddCounterToLists < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :counter, :integer, :default => 0
  end
end
