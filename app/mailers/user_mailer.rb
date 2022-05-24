class UserMailer < ApplicationMailer
    default from: 'BottlesForTheHomeless@me.com'

    def welcome_email
      @user = params[:user]
      @url  = 'http://localhost:4000/login'
      mail(to: @user.email, subject: 'Welcome to Bottles For The Homeless')
    end
end
