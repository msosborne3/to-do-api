require 'rails_helper'

RSpec.describe 'Items API' do
  # Initialize data for testing
  let!(:list) { FactoryGirl.create(:list) }
  let!(:items) { FactoryGirl.create_list(:item, 15, list_id: list.id) }
  let(:list_id) { list.id }
  let(:id) { items.first.id }

  describe 'GET /lists/:list_id/items' do

  end

  describe 'POST /lists/:list_id/items' do

  end

  describe 'GET /lists/:list_id/items/:id' do

  end

  describe 'PUT /lists/:list_id/items/:id' do

  end

  describe 'DELETE /lists/:list_id/items/:id' do

  end
end