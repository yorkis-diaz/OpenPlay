Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update, :destroy] do 
      resources :reservations, only: [:create]
      resources :saved_events, only: :create
    end
    resources :saved_events, only: :destroy
    resources :reservations, only: [:update, :destroy] do 
      resources :reviews, only: [:create]
    end

    resource :session, only: [:index, :create, :destroy]
    resources :events, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end

    get '/search', to: 'events#search'
  end
end
