module V1
  class ItemsController < ApplicationController
    before_action :set_list
    before_action :set_list_item, only: [:show, :update, :destroy]

    # GET /lists/:list_id/items
    def index
      json_response(@list.items)
    end

    # GET /lists/:list_id/items/:id
    def show
      json_response(@item)
    end

    # POST /lists/:list_id/items
    def create
      # use create! so that an ActiveRecord::RecordInvalid exception
      # will be thrown if needed.
      @list.items.create!(item_params)
      json_response(@list, :created)
    end

    # PUT /lists/:list_id/items/:id
    def update
      @item.update(item_params)
      head :no_content
    end

    # DELETE /lists/:list_id/items/:id
    def destroy
      @item.destroy
      head :no_content
    end

    private

    # Only allows specific params
    def item_params
      params.permit(:text, :done)
    end

    # Finds the appropriate list
    def set_list
      @list = List.find(params[:list_id])
    end

    # Finds the appropriate item
    def set_list_item
      @item = @list.items.find_by!(id: params[:id]) if @list
    end
  end
end