class Notifier < ApplicationMailer
  default from: "brooklyne.finni@gmail.com"

   def wuphf(me)
    @me = me
    mail(to: me,
      subject: "WUPHF!")
  end
end
