module V1
  class ListsController < ApplicationController
    # Find the correct list before show, update, and destroy
    before_action :set_list, only: [:show, :update, :destroy]

    # GET /lists
    def index
      @lists = List.all
      json_response(@lists)
    end

    # POST /lists
    def create
      # use create! so that an ActiveRecord::RecordInvalid exception
      # will be thrown if needed.
      @list = List.create!(list_params)
      json_response(@list, :created)
    end

    # GET /lists/:id
    def show
      json_response(@list)
    end

    # PUT /lists/:id
    def update
      @list.update(list_params)
      head :no_content
    end

    # DELETE /lists/:id
    def destroy
      @list.destroy
      head :no_content
    end

    private

    # Only allows specific params
    def list_params
      params.permit(:name)
    end

    # Finds the appropriate list
    def set_list
      @list = List.find(params[:id])
    end
  end
end
