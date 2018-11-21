Rails.application.routes.draw do
  get '/api/projects', to: 'projects#index'
  post '/api/save', to: 'projects#create', :defaults => {:format => :json}
  delete '/api/projects/:id', to: 'projects#delete'
end
