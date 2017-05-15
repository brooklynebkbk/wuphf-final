class AddMoreFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :phone, :string
    add_column :users, :sc_username, :string
    add_column :users, :encrypted_sc_password, :string
    add_column :users, :fb_username, :string
    add_column :users, :encrypted_fb_password, :string
    add_column :users, :slack_username, :string
    add_column :users, :encrypted_slack_password, :string
    add_column :users, :insta_username, :string
    add_column :users, :encrypted_insta_password, :string
    add_column :users, :twitter_username, :string
    add_column :users, :encrypted_twitter_password, :string
    add_column :users, :other_email, :string
    add_column :users, :encrypted_email_password, :string
  end
end
