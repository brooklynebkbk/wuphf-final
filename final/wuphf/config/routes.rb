Rails.application.routes.draw do
  root to: "wuphf#index"
  devise_for :users, :controllers => { registrations: 'registrations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "wuphf#wuphf"
end
