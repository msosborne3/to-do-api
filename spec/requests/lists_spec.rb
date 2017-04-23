require 'rails_helper'

# Using requests to rest this code since it is an API
# and the requests are very important.

RSpec.describe 'To Do API', type: :request do
  # initialize some lists and a list_id for testing
  let!(:lists) {create_list(:list, 8)}
  let!(:list_id) {lists.first.id}

  # Tests that GET /lists has the expected response
  describe 'GET /lists' do
    before { get '/lists'}

    # GET /list should respond with json of size 8 since there
    # are 8 lists
    it 'returns lists' do
      expect(json).not_to be_empty
      export(json.size).to eq(8)
    end

    # The request should be successful
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # tests that GET /lists/:id has the expected response
  describe 'GET lists/:id' do
    before { get '/lists/#{list_id}'}

    # The behavior should depend on whether or not the lsit exists.

    # Tests that the behavior is as expected when the list does exist.
    context 'when list record exists' do
      # The correct list should be returned
      it 'returns the correct list' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(list_id)
      end

      # The request should be successful
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    # Tests that the behavior is as expected when the list does not exist.
    context 'when list record does not exist' do
      # let lsit_id be an id that does not exist
      let(:list_id) { 10 }

      # The request should return 404 not found
      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  # Tests that POST /lists has the expected response
  describe 'POST /lists' do
    # initialize an attribute for testing
    let(:valid_attr) { {name: 'Grocery shop'} }

    context 'when the request is valid' do
      # makes a post request to create a list with valid_attr
      before { post '/lists', params: valid_attr }

      # a list should be created with the attributes if the request
      # is valid
      it 'creates a list' do
        expect(json['title']).to eq('Grocery shop')
      end

      # if a list is created, it should respond with a created status code
      it 'returns a status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      # makes a post request to create a list with blank attribute
      before { post '/lists', params: { name: '' } }

      # an invalid request should respond with status code 422
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  # Tests that PUT /lists/:id has the expected response
  describe 'PUT /lists/:id' do
    let(:valid_attr) { {name: 'Grocery Shopping'} }

    context 'when the list record exists' do
      # make a put request to /lists/:id with valid attributes
      before { put "/lists/#{list_id}", params: valid_attr }

      # The list should be updated
      it 'updates the list record' do
        expect(response.body).to be_empty
      end

      # The valid request should get a 204 status code in response
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Tests that DELETE /lists/:id has the expected response
  describe 'DELETE /lists/:id' do
    # make a delete request to /lists/:id
    before { delete "/lists/#{list_id}" }

    # The request should respond with 204 status code
    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end