class Napkin < ActiveRecord::Base
  belongs_to :user
  mount_base64_uploader :image, NapkinUploader
  has_paper_trail
end
