require 'rails_helper'

RSpec.describe 'Items API' do
  # Initialize data for testing
  let!(:list) { FactoryGirl.create(:list) }
  let!(:items) { FactoryGirl.create_list(:item, 15, list_id: list.id) }
  let(:list_id) { list.id }
  let(:id) { items.first.id }

  # Tests that get /lists/:list_id/items has the expected response
  describe 'GET /lists/:list_id/items' do
    before { get "/lists/#{list_id}/items"}

    # It hould respond with json of size 15 since there
    # are 15 items in the list
    it 'returns items' do
      expect(JSON.parse(response.body)).not_to be_empty
      expect(JSON.parse(response.body).size).to eq(15)
    end

    # The request should be successful
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
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