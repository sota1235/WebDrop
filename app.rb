require 'sinatra'
require 'sinatra/base'
require 'haml'

require_relative 'models/init'

class Server < Sinatra::Base
  get '/' do
    haml :index
  end

  get '/receive' do
    haml :receive
  end

  get '/send' do
    haml :send
  end
end
