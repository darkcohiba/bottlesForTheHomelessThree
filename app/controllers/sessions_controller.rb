class   Api::V1::SessionsController < ApplicationController
    skip_before_action :authorize_user, :only => [:login, :logout]

    def login
        user = User.find_by(username:params[:username])
        puts params[:username]
        puts user
        puts session[:current_user]
        puts "Welcome"
        puts user&.authenticate(params[:password])
        puts params[:password]
        
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
            puts "working?"
            puts session[:current_user]
            puts session
        else
            puts "not working"
            render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
        end
        puts session[:current_user]
    end 

    def logout
        session.delete :current_user
        render status: :no_content
    end 
end
