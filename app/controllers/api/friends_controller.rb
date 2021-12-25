class Api::FriendsController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @friends = user.friends
    render :index
  end

  def create
    @friend = Friend.new(friend_params)
    @friend.user_id = current_user.id
    if @friend.save
      render :show, status: 200
    else
      render json: @friend.errors.full_messages, status: 400
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
    params.require(:friends).permit(:friend_email)
  end

end
