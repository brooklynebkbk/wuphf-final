class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def wuphf
    email = brooklyne.finni@gmail.com
    UserMailer.send_wuphf(email).deliver_now
  end

end
