class NapkinsController < ApplicationController
  def new
    @napkin = Napkin.new
  end

  def create
    @napkin = Napkin.create!(user: current_user, token: SecureRandom.uuid) do |napkin|
      napkin.json = params[:napkin][:json]
      napkin.image = params[:napkin][:image]
    end
    CreateIssue.create! @napkin
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
end
