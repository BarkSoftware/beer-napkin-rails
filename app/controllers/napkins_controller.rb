class NapkinsController < ApplicationController
  def new
    @napkin = Napkin.new
  end

  def create
    @napkin = Napkin.create! napkin_params
    redirect_to edit_napkin_path(@napkin)
  end

  def index
  end

  def edit
    @napkin = Napkin.find(params[:id])
  end

  def show
  end

  def update
    @napkin = Napkin.find(params[:id]).tap do |napkin|
      napkin.update_attributes!(napkin_params.slice(:json, :image_data))
    end
    redirect_to edit_napkin_path(@napkin)
  end

  private

  def napkin_params
    { user: current_user }.merge(params[:napkin])
  end
end
