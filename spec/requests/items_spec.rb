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

  # Tests that post /lists/:list_id/items has the expected response
  describe 'POST /lists/:list_id/items' do
    # initialize an attribute for testing
    let(:valid_attr) { {text: 'Grocery shop', done: false} }

    context 'when the request is valid' do
      # makes a post request to create an item with valid_attr
      before { post "/lists/#{list_id}/items", params: valid_attr }

      # if an item is created, it should respond with a created status code
      it 'returns a status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      # makes a post request to create an item with blank attribute
      before { post "/lists/#{list_id}/items", params: { text: '' } }

      # an invalid request should respond with status code 422
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
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

  # Tests that put /lists/:list_id/items/:id has the expected response
  describe 'PUT /lists/:list_id/items/:id' do
    let(:valid_attr) { {text: 'Grocery Shopping'} }

    context 'when the item record exists' do
      # make a put request to /lists/:list_id/items/:id with valid attributes
      before { put "/lists/#{list_id}/items/#{id}", params: valid_attr }

      # The item should be updated
      it 'updates the item record' do
        expect(response.body).to be_empty
      end

      # The valid request should get a 204 status code in response
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Tests that delete /lists/:list_id/items/:id has the expected response
  describe 'DELETE /lists/:list_id/items/:id' do
    # make a delete request to /lists/:list_id/items/:id
    before { delete "/lists/#{list_id}/items/#{id}" }

    # The request should respond with 204 status code
    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end