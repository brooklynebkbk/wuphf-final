class UserMailer < ApplicationMailer

  def send_wuphf(email)
    mail(to: email, subject: "wuphf")
  end

end
