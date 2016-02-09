class NapkinsController < ApplicationController
  def new
    @napkin = Napkin.new
  end

  def create
    @napkin = Napkin.create! napkin_params
    @napkin.image = params[:napkin][:image]
    redirect_to edit_napkin_path(@napkin)
  end

  def index
  end

  def edit
    @napkin = Napkin.find(params[:id])
  end

  def show
    @napkin = Napkin.find(params[:id])
    authorize! :manage, @napkin
  end

  def update
    @napkin = Napkin.find(params[:id]).tap do |napkin|
      napkin.json = params[:napkin][:json]
      napkin.token = SecureRandom.uuid
      napkin.image = params[:napkin][:image]
      napkin.save!
    end
    redirect_to edit_napkin_path(@napkin)
  end

  private

  def napkin_params
    {
      user: current_user,
      token: SecureRandom.uuid,
    }.merge(params[:napkin])
  end
end
