Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update, :destroy] do 
      resources :reservations, only: [:index, :create, :update, :destroy] 
    end
    resources :reservations do 
      resources :reviews, only: [:create]
    end

    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end

    get '/search', to: 'events#search'
    #resources :reservations, [:create,:update, :destroy]
  end
end
