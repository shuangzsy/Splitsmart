class Api::FriendsController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @friends = user.friends
    render :index
  end

  def create
    @friend = Friend.new(friend_params)
    @friend_user = User.find_by(email: friend_params[:friend_email])
    @friend.user_id = current_user.id
    if @friend_user
      if @friend.save
        render :show, status: 200
      else
        render json: @friend.errors.full_messages, status: 400
      end
    else
      render json: ["User does not exsist"], status: 404
    end
  end

  def show
    @friend = Friend.find(params[:id])
    if @friend
      render :show
    else
      render json: ["Friend does not exsist"], status: 404
    end
  end

  def destroy
    @friend = Friend.find(params[:id])
    if @friend
      @friend.destroy
      render :show
    else
      render json: ["Friend does not exsist"], status: 404
    end
  end
 
  def friend_params
    params.require(:friend).permit(:friend_email)
  end

end
