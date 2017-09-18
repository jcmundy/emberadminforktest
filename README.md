# README
```
Notes

in routes.rb add
   namespace :admin do
      resources :invitations
   end

install ember-crumbly

touch app/controllers/admin/invitations_controller.rb
	- copy contents of controllers/invitations_controller.rb change 1st line to: 
	class Admin::InvitationsController < ApplicationController

```
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
