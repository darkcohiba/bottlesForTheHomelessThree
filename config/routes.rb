Rails.application.routes.draw do
  resources :addresses
  resources :comments
  resources :posts
  resources :bottles
  resources :users


  # Login / Logout Routes
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get "/me", to: "users#showme"

  #search
  # show "/listposts", to: 'posts#listposts'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


