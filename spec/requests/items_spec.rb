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

  # Tests that get /lists/:list_id/items/:id has the expected response
  describe 'GET /lists/:list_id/items/:id' do
    before { get "/lists/#{list_id}/items/#{id}"}

    # The behavior should depend on whether or not the item exists.

    # Tests that the behavior is as expected when the item does exist.
    context 'when item record exists' do
      # The correct item should be returned
      it 'returns the correct item' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['id']).to eq(id)
      end

      # The request should be successful
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    # Tests that the behavior is as expected when the item does not exist.
    context 'when item record does not exist' do
      # let id be an id that does not exist
      let(:id) { 20 }

      # The request should return 404 not found
      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'PUT /lists/:list_id/items/:id' do

  end

  describe 'DELETE /lists/:list_id/items/:id' do

  end
end