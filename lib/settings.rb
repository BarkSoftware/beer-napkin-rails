class Settings < Settingslogic
  source "#{Rails.root}/config/settings.yml"
  namespace Rails.env

  def self.storage_method
    self['storage_method'].to_sym
  end
end
