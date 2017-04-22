require 'rails_helper'

RSpec.describe Item, type: :model do
  # Tests that an item belongs to a list
  it { should belong_to(:list) }

  # Item model should ensure that it has text before saving
  it { should validate_presence_of(:text) }
end
