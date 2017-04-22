require 'rails_helper'

RSpec.describe List, type: :model do
  # Tests that list has many items
  it { should have_many(:items) }

  # List should ensure that a name is present before saving
  it { should validate_presence_of(:name) }
end
