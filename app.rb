require 'sinatra'
require 'sinatra/base'
require 'haml'

require 'models/init'

class Server < Sinatra::Base
  get '/' do
    haml :index
  end
end
