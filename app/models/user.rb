class User < ActiveRecord::Base
  devise :omniauthable, :rememberable, :trackable

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.image = auth.info.image
      user.username = auth.info.nickname
    end
  end
end
