Rails.application.routes.draw do
  get '/api/projects', to: 'projects#index'
  post '/api/save', to: 'projects#create'
end
