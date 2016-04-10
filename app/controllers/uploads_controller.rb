class UploadsController < ApplicationController
  def show
    @image = Image.find(params[:id]).image
    data = open(@image.url)
    send_data data.read, type: data.content_type, disposition: 'inline'
  end

  def create
    @image = Image.create!(token: SecureRandom.uuid) do |image|
      image.image = params[:file]
    end
    render json: { url: upload_path(@image.id) }, status: 201
  end
end
