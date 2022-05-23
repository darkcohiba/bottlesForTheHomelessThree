class BottlesController < ApplicationController
  before_action :set_bottle, only: [:show, :update, :destroy]

  # GET /bottles
  def index
    @bottles = Bottle.all

    render json: @bottles
  end

  # GET /bottles/1
  def show
    render json: @bottle
  end

  # POST /bottles
  def create
    @bottle = Bottle.new(bottle_params)

    if @bottle.save
      render json: @bottle, status: :created, location: @bottle
    else
      render json: @bottle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bottles/1
  def update
    if @bottle.update(update_bottle_params)
      render json: @bottle
    else
      render json: @bottle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bottles/1
  def destroy
    @bottle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bottle
      @bottle = Bottle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def update_bottle_params
      params.permit(:isClaimed)
    end
end
