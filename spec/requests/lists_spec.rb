require 'rails_helper'

RSpec.describe 'To Do API', type :request do
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


end