require 'rails_helper'

RSpec.describe NapkinsController, type: :controller do
  describe 'GET #new' do
    it 'responds successfully' do
      get :new
      expect(response).to be_success
    end

    it 'renders the new template' do
      get :new
      expect(response).to render_template('new')
    end
  end
end
