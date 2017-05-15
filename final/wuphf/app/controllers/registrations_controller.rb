class RegistrationsController < Devise::RegistrationsController
  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :phone, :sc_username, :encrypted_sc_password, :fb_username, :encrypted_fb_password, :slack_username, :encrypted_slack_password, :insta_username, :encrypted_insta_password, :twitter_username, :encrypted_twitter_password, :other_email, :encrypted_email_password)
  end
end
